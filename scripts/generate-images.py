"""Generates the site icons and the Open Graph image from the app icon and the bundled fonts.

Run from the project root:  python scripts/generate-images.py
Requires Pillow (`pip install pillow`).
"""

from pathlib import Path

import numpy as np
from PIL import Image, ImageDraw, ImageFilter, ImageFont

ROOT = Path(__file__).resolve().parent.parent
ASSETS = ROOT / "src" / "assets"
PUBLIC = ROOT / "public" / "assets"
ICON = PUBLIC / "icon-512.png"
FONTS = ASSETS / "fonts"

NIGHT = (20, 23, 58)
TEAL = (31, 138, 128)
GOLD = (242, 181, 68)
GOLD_LIGHT = (255, 214, 122)
WHITE = (255, 255, 255)
SOFT = (223, 226, 245)


def rounded(image: Image.Image, radius: int) -> Image.Image:
    mask = Image.new("L", image.size, 0)
    ImageDraw.Draw(mask).rounded_rectangle((0, 0, image.size[0], image.size[1]), radius=radius, fill=255)
    out = image.convert("RGBA")
    out.putalpha(mask)
    return out


def gradient(width: int, height: int) -> Image.Image:
    y = np.linspace(0, 1, height)[:, None]
    x = np.linspace(0, 1, width)[None, :]
    t = np.clip(0.7 * y + 0.3 * x, 0, 1)[..., None]
    start = np.array(NIGHT, dtype=float)
    end = np.array(TEAL, dtype=float)
    pixels = start * (1 - t) + end * t
    return Image.fromarray(pixels.astype(np.uint8), "RGB")


def generate_icons(icon: Image.Image) -> None:
    icon.resize((192, 192), Image.LANCZOS).save(PUBLIC / "icon-192.png", optimize=True)
    icon.resize((180, 180), Image.LANCZOS).save(PUBLIC / "apple-touch-icon.png", optimize=True)
    icon.resize((64, 64), Image.LANCZOS).save(PUBLIC / "favicon.png", optimize=True)


def generate_og(icon: Image.Image) -> None:
    width, height = 1200, 630
    image = gradient(width, height).convert("RGBA")

    # Subtle dot grid, like the app's night sky.
    dots = Image.new("RGBA", (width, height), (0, 0, 0, 0))
    draw = ImageDraw.Draw(dots)
    for y in range(18, height, 44):
        for x in range(18, width, 44):
            draw.ellipse((x, y, x + 2, y + 2), fill=(*GOLD_LIGHT, 55))
    image = Image.alpha_composite(image, dots)

    # Decorative circles.
    decor = Image.new("RGBA", (width, height), (0, 0, 0, 0))
    d = ImageDraw.Draw(decor)
    d.ellipse((940, 330, 1400, 790), fill=(*TEAL, 55))
    d.ellipse((-160, 420, 220, 800), fill=(*TEAL, 35))
    image = Image.alpha_composite(image, decor)

    # App icon with a soft shadow.
    size = 196
    app_icon = rounded(icon.resize((size, size), Image.LANCZOS), 44)
    shadow = Image.new("RGBA", (width, height), (0, 0, 0, 0))
    ImageDraw.Draw(shadow).rounded_rectangle((86, 224, 86 + size + 12, 224 + size + 12), radius=48, fill=(0, 0, 0, 90))
    shadow = shadow.filter(ImageFilter.GaussianBlur(18))
    image = Image.alpha_composite(image, shadow)
    image.alpha_composite(app_icon, (92, 220))

    draw = ImageDraw.Draw(image)
    eyebrow_font = ImageFont.truetype(str(FONTS / "Nunito_800ExtraBold.ttf"), 24)
    title_font = ImageFont.truetype(str(FONTS / "Lora_600SemiBold.ttf"), 92)
    subtitle_font = ImageFont.truetype(str(FONTS / "Nunito_700Bold.ttf"), 40)
    meta_font = ImageFont.truetype(str(FONTS / "Nunito_700Bold.ttf"), 27)

    x = 340
    draw.text((x, 196), "FREE · NO ADS · OFFLINE", font=eyebrow_font, fill=GOLD_LIGHT)
    draw.text((x, 236), "Ilm Journey", font=title_font, fill=GOLD)
    draw.text((x, 358), "Learn Islam by playing", font=subtitle_font, fill=WHITE)
    draw.text((x, 434), "131 games · 25 prophets · 3 languages", font=meta_font, fill=SOFT)

    image.convert("RGB").save(PUBLIC / "og-image.png", optimize=True)


def main() -> None:
    icon = Image.open(ICON).convert("RGBA")
    generate_icons(icon)
    generate_og(icon)
    print("Generated favicon.png, apple-touch-icon.png, icon-192.png and og-image.png")


if __name__ == "__main__":
    main()
