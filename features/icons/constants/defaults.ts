import { ICON_DESIGN } from "./design";

export const ICON_DEFAULTS = {
    VIEW_BOX: `0 0 ${ICON_DESIGN.GRID_SIZE} ${ICON_DESIGN.GRID_SIZE}`,
    SIZE: ICON_DESIGN.GRID_SIZE,
    STROKE: "currentColor",
    STROKE_WIDTH: ICON_DESIGN.STROKE_WIDTH,
    STROKE_LINE_CAP: "round",
    STROKE_LINE_JOIN: "round",
    FILL: "none",
    VECTOR_EFFECT: "non-scaling-stroke",
    SECONDARY_STROKE_OPACITY: ICON_DESIGN.SECONDARY_OPACITY,
    FOCUSABLE: false
} as const;
