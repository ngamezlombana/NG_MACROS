import os
import re
import json

workspace_dir = os.path.dirname(os.path.abspath(__file__))
nc_files = [f for f in sorted(os.listdir(workspace_dir)) if f.lower().endswith(".nc")]

# ---------------------------------------------------------------------------
# Fuente unica de metadatos de las macros.
# index.html consume MACROS_DATA y MACRO_CATEGORIES_DATA generados desde aqui.
# ---------------------------------------------------------------------------
METADATA = {
    "O8101": {
        "id": "O8101",
        "category": "patrones_agujeros",
        "sub_category": "agujero_lineal",
        "title": "O8101 - Patron de Agujero Angular",
        "subtitle": "Serie lineal equidistante orientada a cualquier angulo polar",
        "icon": "linear_scale",
        "g65_template": "G65 P8101 X[#24] Y[#25] A[#1] Q[#17] H[#11] T[#20] F[#9] S[#19] Z[#26] R[#18] E[#8]"
    },
    "O8103": {
        "id": "O8103",
        "category": "patrones_agujeros",
        "sub_category": "agujero_marco",
        "title": "O8103 - Patron de Agujero de Marco Rectangular",
        "subtitle": "Perimetro rectangular de 4 lados con prevencion de sobretaladrado en esquinas",
        "icon": "crop_free",
        "g65_template": "G65 P8103 X[#24] Y[#25] U[#21] V[#22] I[#4] J[#5] T[#20] F[#9] S[#19] Z[#26] R[#18] E[#8]"
    },
    "O8104": {
        "id": "O8104",
        "category": "patrones_agujeros",
        "sub_category": "agujero_bcd",
        "title": "O8104 - Circulo de Agujeros de Perno (BCD / PCD)",
        "subtitle": "Circulo de barrenado parametrico con angulo inicial y seleccion de orificio de inicio",
        "icon": "donut_large",
        "g65_template": "G65 P8104 X[#24] Y[#25] W[#23] H[#11] A[#1] S[#19] T[#20] F[#9] Z[#26] R[#18] E[#8] B[#2]"
    },
    "O8105": {
        "id": "O8105",
        "category": "patrones_agujeros",
        "sub_category": "agujero_arco",
        "title": "O8105 - Patron de Agujeros en Arco",
        "subtitle": "Barrenado en segmento circular con paso angular uniforme",
        "icon": "timelapse",
        "g65_template": "G65 P8105 X[#24] Y[#25] W[#23] H[#11] A[#1] I[#4] T[#20] F[#9] S[#19] Z[#26] R[#18] E[#8]"
    },
    "O8106": {
        "id": "O8106",
        "category": "cajeras",
        "sub_category": "circulares",
        "title": "O8106 - Desbaste de Cajera Circular",
        "subtitle": "Vaciado concentrico con control de sobrematerial en paredes U y fondo V",
        "icon": "radio_button_checked",
        "g65_template": "G65 P8106 X[#24] Y[#25] D[#7] T[#20] F[#9] S[#19] Z[#26] K[#6] W[#23] U[#21] V[#22] R[#18]"
    },
    "O8107": {
        "id": "O8107",
        "category": "cajeras",
        "sub_category": "circulares",
        "title": "O8107 - Acabado de Cajera Circular",
        "subtitle": "Perfilado circular con entrada y salida tangencial en arco",
        "icon": "track_changes",
        "g65_template": "G65 P8107 X[#24] Y[#25] W[#23] T[#20] F[#9] S[#19] Z[#26] R[#18]"
    },
    "O8111": {
        "id": "O8111",
        "category": "cajeras",
        "sub_category": "circulares",
        "title": "O8111 - Ciclo de Corte Circular (Emulacion G13)",
        "subtitle": "Trayectoria G13 emulada con G03 en fresado ascendente (climb milling)",
        "icon": "all_inclusive",
        "g65_template": "G65 P8111 X[#24] Y[#25] D[#7] T[#20] F[#9] S[#19] Z[#26] R[#18]"
    },
    "O8112": {
        "id": "O8112",
        "category": "cajeras",
        "sub_category": "rectangulares",
        "title": "O8112 - Desbaste de Cajera Rectangular",
        "subtitle": "Vaciado concentrico rectangular con control de sobrematerial en paredes U y fondo V",
        "icon": "crop_free",
        "g65_template": "G65 P8112 X[#24] Y[#25] W[#23] H[#11] R[#18] T[#20] F[#9] S[#19] Z[#26] K[#6] E[#8] U[#21] V[#22] B[#2]"
    },
    "O8110": {
        "id": "O8110",
        "category": "cajeras",
        "sub_category": "rectangulares",
        "title": "O8110 - Acabado de Cajera Rectangular o Marco",
        "subtitle": "Perfilado rectangular con radios de esquina R y entrada/salida por el centro",
        "icon": "crop_portrait",
        "g65_template": "G65 P8110 X[#24] Y[#25] W[#23] H[#11] R[#18] T[#20] F[#9] S[#19] Z[#26] B[#2]"
    },
    "O8108": {
        "id": "O8108",
        "category": "ranuras",
        "sub_category": "ranura_recta",
        "title": "O8108 - Ranura Recta Angular",
        "subtitle": "Ranurado orientado a cualquier angulo polar con arcos extremos de radio R",
        "icon": "linear_scale",
        "g65_template": "G65 P8108 X[#24] Y[#25] A[#1] D[#7] R[#18] T[#20] F[#9] S[#19] Z[#26] B[#2] K[#6]"
    },
    "O8109": {
        "id": "O8109",
        "category": "ranuras",
        "sub_category": "ranura_circular",
        "title": "O8109 - Ranura Circular Multi-profundidad",
        "subtitle": "Canal anular circular concentrico con control de pasadas en Z",
        "icon": "motion_photos_on",
        "g65_template": "G65 P8109 X[#24] Y[#25] W[#23] T[#20] F[#9] S[#19] D[#7] C[#3] R[#18]"
    }
}

CATEGORY_META = {
    "patrones_agujeros": {
        "title": "PATRONES DE AGUJEROS // TALADRADO PARAMETRICO",
        "icon": "adjust",
        "color": "primary",
        "label": "PATRONES DE AGUJEROS",
    },
    "cajeras": {
        "title": "CAJERAS (POCKETS) // CIRCULARES Y RECTANGULARES",
        "icon": "layers",
        "color": "secondary",
        "label": "CAJERAS (POCKETS)",
    },
    "ranuras": {
        "title": "RANURAS (SLOTS) // RECTAS Y CIRCULARES",
        "icon": "reorder",
        "color": "tertiary",
        "label": "RANURAS (SLOTS)",
    },
}

# Mapping of Fanuc Local Variable numbers to standard Letter addresses (List 1)
FANUC_LETTER_MAP = {
    1: "A", 2: "B", 3: "C", 4: "I", 5: "J", 6: "K",
    7: "D", 8: "E", 9: "F", 11: "H", 17: "Q", 18: "R",
    19: "S", 20: "T", 21: "U", 22: "V", 23: "W", 24: "X",
    25: "Y", 26: "Z"
}

BOOK_CHAPTER = "Ingeniero Nestor Gamez"


def normalize_content(content: str) -> str:
    """Corrige finales de linea y el literal '\\n' que aparece al final de
    algunos archivos .nc, sin tocar el resto del programa."""
    content = content.replace("\r\n", "\n").replace("\r", "\n")
    content = content.replace("%\\n", "%\n")
    if not content.endswith("\n"):
        content += "\n"
    return content


macros = []

for filename in nc_files:
    filepath = os.path.join(workspace_dir, filename)
    with open(filepath, "r", encoding="utf-8", errors="ignore") as f:
        content = normalize_content(f.read())

    lines = content.split("\n")

    # Try to extract program ID (e.g. O8101)
    prog_id = None
    title = filename.replace(".nc", "")
    for line in lines:
        match_id = re.search(r"\b(O81\d\d)\b", line)
        if match_id:
            prog_id = match_id.group(1)
            title = line.strip().strip("%").strip()
            break

    # Find the bounds of the operator variables section
    start_idx = -1
    end_idx = len(lines)
    for idx, line in enumerate(lines):
        if "VARIABLES DE ENTRADA" in line:
            start_idx = idx + 1
            break

    if start_idx == -1:
        start_idx = 0

    for idx in range(start_idx, len(lines)):
        line = lines[idx].strip()
        if "CONTROL DE ERRORES" in line or "ARRANQUE DE HUSILLO" in line or (line.startswith("IF [") and "#3000" in line):
            end_idx = idx
            break

    variables = []

    # Extract variable assignments: #24 = 50.0 (X: ...)
    var_regex = re.compile(r"^\s*#(\d+)\s*=\s*([-+]?\d*\.?\d+(?:[eE][-+]?\d+)?)\s*(?:\((.*)\))?")

    for i in range(start_idx, end_idx):
        line = lines[i].strip()
        if not line or line.startswith("%") or line.startswith("O"):
            continue

        m = var_regex.match(line)
        if m:
            var_num = int(m.group(1))
            var_val = float(m.group(2))
            comment_text = m.group(3) if m.group(3) else ""

            # Check for explicit letter in comment like "(X: COORDENADA...)"
            letter_match = re.match(r"^([A-Z]):\s*(.*)", comment_text)
            if letter_match:
                arg_letter = letter_match.group(1)
                clean_desc = letter_match.group(2)
            else:
                arg_letter = FANUC_LETTER_MAP.get(var_num, f"#{var_num}")
                clean_desc = comment_text

            variables.append({
                "num": var_num,
                "letter": arg_letter,
                "value": var_val,
                "comment": clean_desc,
                "full_comment": comment_text,
                "line_idx": i,
                "original_line": line
            })

    meta = METADATA.get(prog_id)
    if meta is None:
        meta = {
            "id": prog_id or filename,
            "category": "otros",
            "sub_category": "general",
            "title": title,
            "subtitle": "Ciclo Fanuc Custom Macro B",
            "icon": "settings",
            "g65_template": f"G65 P{prog_id[1:] if prog_id else '0000'}"
        }

    category_meta = CATEGORY_META.get(meta["category"], {
        "title": "OTROS CICLOS",
        "icon": "settings",
        "color": "outline",
        "label": "OTROS",
    })

    macros.append({
        "id": prog_id or filename,
        "filename": filename,
        "title": meta["title"],
        "subtitle": meta["subtitle"],
        "category": meta["category"],
        "category_title": category_meta["title"],
        "category_label": category_meta["label"],
        "category_color": category_meta["color"],
        "sub_category": meta["sub_category"],
        "icon": meta["icon"],
        "book_chapter": BOOK_CHAPTER,
        "g65_template": meta["g65_template"],
        "variables": variables,
        "full_content": content
    })

# Sort according to program order
prog_order = ["O8101", "O8103", "O8104", "O8105", "O8106", "O8107", "O8111", "O8112", "O8110", "O8108", "O8109"]
macros.sort(key=lambda m: prog_order.index(m["id"]) if m["id"] in prog_order else 999)

# Category data derived from the same metadata: no duplicated lists in index.html.
categories = {}
for macro in macros:
    cat = macro["category"]
    if cat not in categories:
        meta = CATEGORY_META.get(cat, {
            "title": "OTROS CICLOS",
            "icon": "settings",
            "color": "outline",
            "label": "OTROS",
        })
        categories[cat] = {
            "title": meta["title"],
            "icon": meta["icon"],
            "color": meta["color"],
            "label": meta["label"],
            "items": [],
        }
    categories[cat]["items"].append({
        "id": macro["id"],
        "name": macro["title"],
        "desc": macro["subtitle"],
        "sub": macro["sub_category"],
        "book": "Ing. Nestor Gamez",
    })

# Output as a JS file for the browser
output_path = os.path.join(workspace_dir, "macros_data.js")
js_content = (
    "/* ARCHIVO GENERADO AUTOMATICAMENTE POR parse_macros.py. NO EDITAR A MANO. */\n"
    f"var MACROS_DATA = {json.dumps(macros, indent=2, ensure_ascii=False)};\n"
    f"var MACRO_CATEGORIES_DATA = {json.dumps(categories, indent=2, ensure_ascii=False)};\n"
    "if (typeof window !== 'undefined') {\n"
    "  window.MACROS_DATA = MACROS_DATA;\n"
    "  window.MACRO_CATEGORIES_DATA = MACRO_CATEGORIES_DATA;\n"
    "}\n"
)
with open(output_path, "w", encoding="utf-8") as f:
    f.write(js_content)

print(f"Parsed {len(macros)} macros and wrote to {output_path}")
for m in macros:
    print(f" - [{m['id']}] {m['title']} ({m['category']} / {m['sub_category']}) - {len(m['variables'])} variables")
