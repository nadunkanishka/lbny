from PIL import Image
import xml.etree.ElementTree as ET

# Load original PNG image
img = Image.open('public/logo.png').convert('RGBA')
w, h = img.size
pixels = img.load()

# Contour / Boundary edge detector
# Find all boundary segments between transparent (alpha <= 128) and filled (alpha > 128) pixels
segments = []

for y in range(h):
    for x in range(w):
        if pixels[x, y][3] > 128:
            # Check top edge
            if y == 0 or pixels[x, y-1][3] <= 128:
                segments.append(((x, y), (x+1, y)))
            # Check right edge
            if x == w-1 or pixels[x+1, y][3] <= 128:
                segments.append(((x+1, y), (x+1, y+1)))
            # Check bottom edge
            if y == h-1 or pixels[x, y+1][3] <= 128:
                segments.append(((x+1, y+1), (x, y+1)))
            # Check left edge
            if x == 0 or pixels[x-1, y][3] <= 128:
                segments.append(((x, y+1), (x, y)))

# Chain segment points into continuous polygon loops
def build_loops(seg_list):
    next_map = {}
    for p1, p2 in seg_list:
        next_map[p1] = p2

    loops = []
    visited = set()
    for p1, p2 in seg_list:
        if p1 in visited:
            continue
        loop = [p1]
        curr = p2
        visited.add(p1)
        while curr != p1 and curr in next_map and curr not in visited:
            visited.add(curr)
            loop.append(curr)
            curr = next_map[curr]
        if len(loop) > 2:
            loops.append(loop)
    return loops

loops = build_loops(segments)

# Build crisp, pixel-exact SVG vector path
svg_parts = [
    f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">'
]
svg_parts.append('<g fill="#8b5cf6">')

for loop in loops:
    d = [f"M {loop[0][0]},{loop[0][1]}"]
    for pt in loop[1:]:
        d.append(f"L {pt[0]},{pt[1]}")
    d.append("Z")
    svg_parts.append(f'  <path d="{" ".join(d)}" />')

svg_parts.append('</g>')
svg_parts.append('</svg>')

svg_content = '\n'.join(svg_parts)

with open('public/logo.svg', 'w') as f:
    f.write(svg_content)

with open('src/assets/logo.svg', 'w') as f:
    f.write(svg_content)

print(f"Pure pixel boundary vector trace complete! Found {len(loops)} loops. Saved to public/logo.svg")
