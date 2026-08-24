import potrace
import numpy as np
from PIL import Image
import os

img_path = 'public/logo.png'
if not os.path.exists(img_path):
    print("PNG not found at", img_path)
    exit(1)

img = Image.open(img_path).convert('RGBA')
w, h = img.size

# Extract alpha channel threshold for binary bitmap matrix
alpha = np.array(img.split()[-1])
bmp = alpha > 120

# Vector trace with potrace algorithm
bmp_obj = potrace.Bitmap(bmp)
path = bmp_obj.trace()

svg_parts = [
    f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">'
]
svg_parts.append('<g fill="#8b5cf6">')

for curve in path:
    start = curve.start_point
    d_path = [f"M {start.x:.2f},{h - start.y:.2f}"]
    for segment in curve:
        end = segment.end_point
        if segment.is_corner:
            c = segment.c
            d_path.append(f"L {c.x:.2f},{h - c.y:.2f} L {end.x:.2f},{h - end.y:.2f}")
        else:
            c1 = segment.c1
            c2 = segment.c2
            d_path.append(f"C {c1.x:.2f},{h - c1.y:.2f} {c2.x:.2f},{h - c2.y:.2f} {end.x:.2f},{h - end.y:.2f}")
    d_path.append("Z")
    svg_parts.append(f'  <path d="{" ".join(d_path)}" />')

svg_parts.append('</g>')
svg_parts.append('</svg>')

svg_content = '\n'.join(svg_parts)

with open('public/logo.svg', 'w') as f:
    f.write(svg_content)

with open('src/assets/logo.svg', 'w') as f:
    f.write(svg_content)

print("Vectorization complete! Corrected vertical orientation saved to public/logo.svg")
