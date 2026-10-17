#!/usr/bin/env python3
"""
One-page printable cubic-yard cheat sheet generator.

Single source of truth: lib/calc.js in this repo.
Every constant below mirrors that library (values verified against
lib/calc.js 2026-10-17); nothing here is invented. The HTML cheat-sheet
page (app/cheat-sheet/page.js) imports lib/calc.js directly, so PDF and
page can never disagree.

Output: public/cubic-yard-cheat-sheet.pdf (one US Letter page).
Usage: python3 scripts/cheat-sheet-gen.py
"""

import os
from reportlab.lib.pagesizes import LETTER
from reportlab.lib.units import inch
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle,
)

# ---------------------------------------------------------------------------
# CONSTANTS — mirrors lib/calc.js (DENSITIES, CONCRETE_BAGS_PER_YARD,
# MULCH_BAGS_PER_YARD, YD3_TO_M3, TONS_TO_TONNES, SQYD_TO_SQM).
# ---------------------------------------------------------------------------

# Default bulk densities, lbs per cubic yard (DENSITIES.<key>.lbs)
DENSITIES_LBS = [
    ("Concrete (ready-mix)", 4050),
    ("Gravel (crushed stone)", 2800),
    ("Fill dirt (screened)", 2200),
    ("Topsoil (screened)", 2400),
    ("Mulch (bark/hardwood)", 800),
    ("Sand (mason/concrete)", 2700),
    ("Rock (landscape mix)", 4500),
    ("Garden soil", 2400),
    ("Hot-mix asphalt", 3915),
]

# Bags per cubic yard, manufacturer yields (CONCRETE_BAGS_PER_YARD)
CONCRETE_BAGS = [("80 lb bags", 45), ("60 lb bags", 60), ("50 lb bags", 72),
                 ("40 lb bags", 90), ("90 lb bags", 40)]

# Mulch bags per cubic yard = 27 cu ft / bag size (MULCH_BAGS_PER_YARD)
MULCH_BAGS = [("2 cu ft bags", 13.5), ("3 cu ft bags", 9)]

# Unit conversions (rounded display forms of the lib/calc.js factors)
YD3_IN_FT3 = 27              # 1 yd^3 = 27 ft^3
YD3_TO_M3 = 0.7646          # 1 yd^3 = 0.7646 m^3
TON_TO_TONNES = 0.9072      # 1 short ton = 0.9072 tonnes
YD2_TO_M2 = 0.8361          # 1 yd^2 = 0.8361 m^2
M2_TO_YD2 = 1.1960          # 1 m^2 = 1.1960 yd^2

# Depths (in) for the coverage table; sq ft per yd^3 = 27 ft^3*12 / d = 324/d
COVERAGE_DEPTHS_IN = [1, 2, 3, 4, 6, 12]

# ---------------------------------------------------------------------------

ACCENT = colors.HexColor("#14532d")      # deep green header bar
ACCENT_DEEP = colors.HexColor("#0b3a1f")
TABLE_HEAD = colors.HexColor("#e8f0e8")
ROW_ALT = colors.HexColor("#f7faf7")
GRID = colors.HexColor("#c9d6c9")
FOOTER = colors.HexColor("#5a6b5a")


def style_table(tbl, header=True, nrows=0):
    """Apply the shared cheat-sheet table look. nrows = data rows (excl header)."""
    cmds = [
        ("GRID", (0, 0), (-1, -1), 0.5, GRID),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("LEFTPADDING", (0, 0), (-1, -1), 6),
        ("RIGHTPADDING", (0, 0), (-1, -1), 6),
        ("TOPPADDING", (0, 0), (-1, -1), 3),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 3),
    ]
    if header:
        cmds += [
            ("BACKGROUND", (0, 0), (-1, 0), TABLE_HEAD),
            ("TEXTCOLOR", (0, 0), (-1, 0), ACCENT_DEEP),
            ("FONTNAME", (0, 0), (-1, 0), "Helvetica-Bold"),
        ]
        for r in range(2, nrows + 1, 2):
            cmds.append(("BACKGROUND", (0, r), (-1, r), ROW_ALT))
    tbl.setStyle(TableStyle(cmds))
    return tbl


def section_title(text, styles):
    return Paragraph(f'<font color="#0b3a1f"><b>{text}</b></font>',
                     styles["SectionHead"])


def build(out_path):
    styles = getSampleStyleSheet()
    styles.add(ParagraphStyle("SectionHead", parent=styles["Normal"],
                              fontSize=11, spaceBefore=8, spaceAfter=4,
                              fontName="Helvetica-Bold"))
    styles.add(ParagraphStyle("Small", parent=styles["Normal"],
                              fontSize=7.5, leading=10,
                              textColor=FOOTER))
    styles.add(ParagraphStyle("Banner", parent=styles["Normal"],
                              fontSize=22, leading=24, textColor=colors.white,
                              fontName="Helvetica-Bold"))
    styles.add(ParagraphStyle("BannerSub", parent=styles["Normal"],
                              fontSize=9.5, leading=12,
                              textColor=colors.white))

    # -- computed rows (nothing hard-coded below except the constants) --------
    density_rows = [["Material", "lbs / yd\u00b3", "tons / yd\u00b3"]]
    for label, lbs in DENSITIES_LBS:
        density_rows.append([label, f"{lbs:,}", f"{lbs / 2000:.2f}"])

    bag_rows = [["Bag size", "Bags per yd\u00b3"]]
    for label, n in CONCRETE_BAGS:
        bag_rows.append([label, str(n)])
    bag_rows.append(["Mulch", "Bags per yd\u00b3"])
    for label, n in MULCH_BAGS:
        n_str = str(int(n)) if n == int(n) else str(n)
        bag_rows.append([label, n_str])

    cov_rows = [["Depth", "1 yd\u00b3 covers"]]
    for d in COVERAGE_DEPTHS_IN:
        cov_rows.append([f'{d}"', f"{324 // d} sq ft"])

    conv_rows = [["Conversion", "Equals"]]
    conv_rows += [
        ["1 cubic yard (yd\u00b3)", f"{YD3_IN_FT3} cubic feet (ft\u00b3)"],
        ["1 cubic yard (yd\u00b3)", f"{YD3_TO_M3} cubic metres (m\u00b3)"],
        ["1 cubic foot (ft\u00b3)", f"{YD3_TO_M3 / YD3_IN_FT3:.4f} cubic metres (m\u00b3)"],
        ["1 short ton", f"{TON_TO_TONNES} tonnes"],
        ["1 square yard (yd\u00b2)", f"{YD2_TO_M2} square metres (m\u00b2)"],
        ["1 square metre (m\u00b2)", f"{M2_TO_YD2:.4f} square yards (yd\u00b2)"],
    ]

    # -- document -------------------------------------------------------------
    doc = SimpleDocTemplate(
        out_path, pagesize=LETTER,
        leftMargin=0.55 * inch, rightMargin=0.55 * inch,
        topMargin=0.45 * inch, bottomMargin=0.45 * inch,
        title="Cubic Yard Cheat Sheet", author="cubicyardcalculator.site",
    )
    W = LETTER[0] - 1.1 * inch
    story = []

    # banner
    banner = Table([
        [Paragraph("Cubic Yard Cheat Sheet", styles["Banner"])],
        [Paragraph("Volume \u2022 weight \u2022 bags \u2022 coverage \u2014 one page, tape it to the truck dash.",
                   styles["BannerSub"])],
    ], colWidths=[W])
    banner.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), ACCENT),
        ("LEFTPADDING", (0, 0), (-1, -1), 14),
        ("RIGHTPADDING", (0, 0), (-1, -1), 14),
        ("TOPPADDING", (0, 0), (-1, -1), 10),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 10),
        ("ROUNDEDCORNERS", [4, 4, 4, 4]),
    ]))
    story.append(banner)

    # two-column body: densities left | bags + coverage right
    dens_tbl = style_table(Table(density_rows, colWidths=[W * 0.30, W * 0.12, W * 0.12]), nrows=len(density_rows))
    bags_tbl = style_table(Table(bag_rows, colWidths=[W * 0.20, W * 0.14]), nrows=len(bag_rows))
    cov_tbl = style_table(Table(cov_rows, colWidths=[W * 0.17, W * 0.17]), nrows=len(cov_rows))

    right_col = Table([
        [section_title("Bags per cubic yard", styles)],
        [bags_tbl],
        [section_title("1 yd\u00b3 coverage at depth", styles)],
        [cov_tbl],
    ], colWidths=[W * 0.36])
    right_col.setStyle(TableStyle([("VALIGN", (0, 0), (-1, -1), "TOP")]))

    left_col = Table([
        [section_title("Material weight per cubic yard", styles)],
        [dens_tbl],
    ], colWidths=[W * 0.56])
    left_col.setStyle(TableStyle([("VALIGN", (0, 0), (-1, -1), "TOP")]))

    body = Table([[left_col, right_col]], colWidths=[W * 0.58, W * 0.42])
    body.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 0),
    ]))
    story.append(Spacer(1, 6))
    story.append(body)

    # conversions + formula row
    conv_tbl = style_table(Table(conv_rows, colWidths=[W * 0.30, W * 0.28]), nrows=len(conv_rows))
    formula = Paragraph(
        '<font color="#0b3a1f"><b>Core formula</b></font><br/><br/>'
        '<font size="10"><b>cubic yards = length(ft) \u00d7 width(ft) \u00d7 depth(ft) \u00f7 27</b></font><br/>'
        '<font size="8.5">Order with a <b>10% overage</b>: '
        'measure exactly, then multiply by 1.1 \u2014 cheaper than a second delivery.</font><br/>'
        '<font size="8.5">Depth in inches \u00f7 12 = depth in feet '
        '(4" = 0.333 ft, 6" = 0.5 ft).</font>',
        styles["Normal"])

    bottom = Table([
        [section_title("Conversions", styles), section_title("Core formula", styles)],
        [conv_tbl, formula],
    ], colWidths=[W * 0.60, W * 0.40])
    bottom.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 8),
    ]))
    story.append(bottom)

    # footer
    story.append(Spacer(1, 10))
    story.append(Paragraph(
        "cubicyardcalculator.site \u2014 verify against your supplier",
        styles["Small"]))

    def on_page(canvas, _doc):
        canvas.setFont("Helvetica", 7)
        canvas.setFillColor(FOOTER)
        canvas.drawRightString(LETTER[0] - 0.55 * inch, 0.35 * inch, "Page 1 of 1")

    doc.build(story, onFirstPage=on_page, onLaterPages=on_page)
    return out_path


if __name__ == "__main__":
    repo_root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    out_dir = os.path.join(repo_root, "public")
    os.makedirs(out_dir, exist_ok=True)
    out = os.path.join(out_dir, "cubic-yard-cheat-sheet.pdf")
    path = build(out)
    size = os.path.getsize(path)
    print(f"Wrote {path} ({size} bytes)")
