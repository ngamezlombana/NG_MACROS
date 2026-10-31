---
name: Obsidian Precision CNC
colors:
  surface: '#0c1322'
  surface-dim: '#0c1322'
  surface-bright: '#323949'
  surface-container-lowest: '#070e1d'
  surface-container-low: '#141b2b'
  surface-container: '#191f2f'
  surface-container-high: '#232a3a'
  surface-container-highest: '#2e3545'
  on-surface: '#dce2f7'
  on-surface-variant: '#d8c3ad'
  inverse-surface: '#dce2f7'
  inverse-on-surface: '#293040'
  outline: '#a08e7a'
  outline-variant: '#534434'
  surface-tint: '#ffb95f'
  primary: '#ffc174'
  on-primary: '#472a00'
  primary-container: '#f59e0b'
  on-primary-container: '#613b00'
  inverse-primary: '#855300'
  secondary: '#4cd7f6'
  on-secondary: '#003640'
  secondary-container: '#03b5d3'
  on-secondary-container: '#00424e'
  tertiary: '#56e5a9'
  on-tertiary: '#003824'
  tertiary-container: '#30c88f'
  on-tertiary-container: '#004e34'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffddb8'
  primary-fixed-dim: '#ffb95f'
  on-primary-fixed: '#2a1700'
  on-primary-fixed-variant: '#653e00'
  secondary-fixed: '#acedff'
  secondary-fixed-dim: '#4cd7f6'
  on-secondary-fixed: '#001f26'
  on-secondary-fixed-variant: '#004e5c'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#0c1322'
  on-background: '#dce2f7'
  surface-variant: '#2e3545'
typography:
  headline-lg:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: 0.02em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '700'
    lineHeight: 28px
    letterSpacing: 0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '700'
    lineHeight: 26px
    letterSpacing: 0.01em
  title-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  body-base:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: 0em
  body-bold:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '600'
    lineHeight: 18px
    letterSpacing: 0em
  label-caps:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.08em
  dro-display:
    fontFamily: JetBrains Mono
    fontSize: 18px
    fontWeight: '700'
    lineHeight: 22px
    letterSpacing: 0.04em
  code-base:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 18px
    letterSpacing: 0em
  code-terminal:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '400'
    lineHeight: 16px
    letterSpacing: 0em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 0.75rem
  gutter-mobile: 0.5rem
  margin: 1rem
  margin-mobile: 0.75rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 0.75rem
  space-lg: 1rem
  space-xl: 1.5rem
---

## Brand & Style

This design system establishes a high-precision, industrial-grade human-machine interface (HMI) for CNC manufacturing, CAM execution, and automation systems. Drawing direct inspiration from Siemens Sinumerik ONE, Fanuc Series 30i/31i-B, Haas NextGen Control, and Autodesk Fusion 360, the visual language prioritizes zero-clutter situational awareness, operational safety, and absolute mechanical precision.

The aesthetic fuses technical dark-mode brutalism with functional tactile instrumentation. Visual elements emphasize high contrast, rigid structural lines, and crisp division of operational cockpit zones. Physical metaphors—such as tactile variable keying, glowing safety switches, and calibrated machine readouts—bridge the gap between industrial shop-floor hardware and modern software control.

The interface targets manufacturing engineers, CNC operators, and CAM programmers working in demanding workshop environments. Visual noise, arbitrary ornamentation, and soft consumer pastels are rejected in favor of razor-sharp hairline borders, functional color categorization, and dense, tabular data layouts engineered to prevent operator fatigue and eliminate operational error.

## Colors

The color system is organized around distinct functional tiers calibrated for low-light shop floors and high-vibration terminal viewing.

### Base & Spatial Tiers
- **Obsidian Core (`#0B0F17`)**: Base canvas stage for toolpath simulation viewports and master terminal framing.
- **Machine Slate (`#111827`)**: Primary structural panels, tool racks, and layout modules.
- **Console Secondary (`#1A1D21`)**: Header bars, nested tool groups, and auxiliary sidebars.
- **Elevated Carbon (`#23272D`)**: Tactile input wells, data table rows, and interactive buttons.
- **Technical Steel Borders (`#1F2937`, `#374151`)**: Structural structural dividers and component edges.

### Functional & Accent Tiers
- **Primary / Safety Orange (`#F59E0B`)**: High-priority execution triggers, selected macro items, active focus rings, and parameter toolpath highlights.
- **Precision Cyan (`#06B6D4`)**: Telemetry metrics, stepover calculation callouts, helical arc geometry, and Z-axis kinematics.
- **Machine Emerald Green (`#10B981`)**: Link heartbeat, safe operating envelopes, cutting feed motion (G01/G02/G03), and Y-axis kinematics.
- **Rapid Motion Green-Cyan (`#00FFC4`)**: Non-cutting rapid traverse paths (G00) and tool center reference vectors.
- **Emergency Danger Red (`#FF3B30`)**: Hardware E-STOP circuits, axis travel limit violations, collision alarms, and X-axis kinematics.
- **Warning Amber (`#FFCC00`)**: Spindle overload thresholds and parameter bounds warnings.

### Text & Readability Tiers
- **Technical White (`#F5F6F8`)**: Primary numerical coordinates, parameter values, and active headlines.
- **Steel Gray (`#D1D5DB`)**: G-code syntax, secondary parameter descriptions, and metric labels.
- **Muted Machine Slate (`#8E95A2`)**: Engineering unit pills, structural captions, and inactive tabs.

## Typography

The typography architecture uses a strict functional bifurcation:
1. **Structural HMI (Inter)**: Manages human interaction, spatial context, labels, and hierarchical section titles.
2. **Tabular Instrumentation (JetBrains Mono)**: Handles G-code blocks, coordinate telemetry, macro variables (`#1` through `#999`), and real-time calculation fields.

### Tabular Alignment Rules
All numerical coordinates, axis readouts, and feed/speed calculations must enforce monospaced figures (`font-variant-numeric: tabular-nums`). This prevents horizontal jitter on digital readouts (DRO) during rapid cycle interpolation.

### Industrial Text Formatting
- Group titles and section dividers must use uppercase casing with expanded tracking (`0.08em` to `0.1em`) to mimic stamped metal physical control pendants.
- Terminal listings preserve rigid line-heights of `16px` to maintain synchronicity between line markers and the active program pointer.

## Layout & Spacing

The layout is built upon an ultra-dense, zero-waste layout optimized for fixed shop-floor touch pendants, dual-monitor consoles, and field tablets.

### Master Screen Architecture
The master viewport enforces a fixed 3-column cockpit structure constrained to `100vh` without page scrolling:
- **Left Column (280px fixed)**: Canned cycle navigation, machine link telemetry, and physical command locks.
- **Center Column (1fr flexible, internally scrollable)**: Active cycle parameter form groups and documentation.
- **Right Column (440px fixed)**: Toolpath vector canvas, live G-code execution terminal, and safety clearance metrics.

### Breakpoints & Reflow
- **Desktop / Shop Pendants (>= 1280px)**: Complete 3-column cockpit layout displayed concurrently.
- **Tablets / Mobile Workstations (< 1280px)**: The 3-column structure collapses into a tabbed dual-view split: Inputs & Documentation toggle against the Canvas & Terminal.
- **Handheld Diagnostics (< 768px)**: Strict vertical single-column stack. Sticky execution actions lock to the bottom edge with a permanent minimum height of 48px to accommodate gloved hands.

## Elevation & Depth

This design system avoids soft diffuse shadows and light floating drops. Elevation is communicated mechanically through **tonal layering**, **recessed wells**, and **crisp 1px steel structural outlines**.

### Surface Tiers
- **Base Level (Canvas Stage)**: `#0B0F17` — Deepest stage layer housing toolpath simulations and coordinate planes.
- **Level 1 (Cockpit Racks)**: `#111827` — Structural sidebars and master module panels bordered by `1px solid #1F2937`.
- **Level 2 (Parametric Cards)**: `#1A1D21` — Content cards, group boxes, and monitoring sections bordered by `1px solid #374151`.
- **Level 3 (Tactile Wells)**: `#23272D` — Sunken parameter input fields and sunken data cells with an inner inset border `1px solid rgba(0, 0, 0, 0.4)`.

### Overlays & Atmospheric Depth
Modals, emergency alert trays, and HUD telemetry widgets use subtle frosted dark acrylic backing (`rgba(26, 29, 33, 0.90)` with `backdrop-filter: blur(8px)`) enclosed in high-contrast steel boundaries. Drop shadows, when used for elevated popovers, must be tight and dark (`0 8px 24px rgba(0, 0, 0, 0.6)`), avoiding colorful diffuse halos except when indicating active power, warning, or error states.

## Shapes

The shape system employs tight corner radii (Level 1: Soft, defaulting to `0.25rem` / `4px` with small badges at `2px` and master cards at `6px`–`8px`).

This subtle softening prevents the visual harshness of raw 0px corners on modern high-DPI panels while preserving the rugged, milled-aluminum feel of industrial CNC machinery. Pill-shaped rounding is strictly forbidden except for circular indicator lamps and machine state tags. Inputs, cards, buttons, and progress meters maintain structured, rectilinear geometry.

## Components

### Buttons
- **Primary Execution Button (`.btn-execute`)**: Solid industrial amber fill (`#F59E0B`), dark obsidian text (`#0B0F17`), weight 700, 4px border-radius, minimum 40px height. Active/click state scales to `0.98`.
- **Secondary Technical Button (`.btn-secondary`)**: Dark slate fill (`#1A1D21`), 1px steel border (`#1F2937`), technical white text (`#F5F6F8`). Hover state brightens border to `#374151` and background to `#23272D`.
- **Hardware E-STOP Button (`.btn-estop`)**: Heavy-duty crimson red (`#FF3B30`), uppercase bold typography, 48px height, red outline glow. Triggered state alternates an urgent background flash between `#FF3B30` and `#9C120C`.

### Parameter Input Fields & Unit Pills
- Inputs sit inside sunken wells (`#23272D`) with a 1px border (`#1F2937`) and 4px radius.
- **Macro Variable Anchor**: An integrated left-pinned badge displaying the parameter number (e.g. `#101`, `#1`) set in monospaced amber typography (`#F59E0B`).
- **Engineering Unit Pill**: An integrated right-pinned badge displaying physical units (`mm`, `RPM`, `mm/min`, `deg`) rendered in uppercase muted text (`#8E95A2`).
- **Focus State**: Replaces border with solid amber (`#F59E0B`) and a subtle 2px ambient highlight. Native browser stepper arrows are suppressed.

### Digital Readout (DRO) Module
- Structured 3-row or 3-column coordinate display.
- Each axis container features a distinctive 3px left indicator bar:
  - **X Axis**: Emergency Red (`#FF3B30`)
  - **Y Axis**: Emerald Green (`#10B981`)
  - **Z Axis**: Precision Cyan (`#06B6D4`)
- Values are set in large, bold monospaced typography (`dro-display`) with tabular figure alignment.

### Cards & Section Containers
- Cards use `#1A1D21` fill with a 1px `#1F2937` perimeter line.
- Header bars include an uppercase title with tracked letter spacing, accompanied by an SVG machining icon (mill, drill, bore) tinted in primary amber.
- Calculations cards utilize an inner subtle cyan tint (`rgba(6, 182, 212, 0.04)`) to denote auto-computed feeds and cycle times.

### Terminal & Code Editor
- Dedicated viewport stage (`#0B0F17`) with a 1px steel border.
- Fixed line-number column in muted carbon (`#717C91`).
- Active execution line highlighted with an amber-tinted background bar (`rgba(245, 158, 11, 0.15)`) anchored by an amber left border.

### Checkboxes, Radios & Switches
- Rectilinear 4px radius checkboxes and circular radio wells built from `#23272D` surfaces with `#374151` borders.
- Checked state fills with `#F59E0B` and dark obsidian interior glyphs.
- Safety interlock toggles use mechanical slider tracks with unambiguous `ON`/`OFF` state labels.