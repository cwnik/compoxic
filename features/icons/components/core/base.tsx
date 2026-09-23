import { cn } from "cn";

import { ICON_DEFAULTS } from "../../constants/defaults";
import type { IconProps } from "../../types";

export function IconBase({
    children,
    title,
    size = ICON_DEFAULTS.SIZE,
    className,
    "aria-label": ariaLabel,
    "aria-hidden": ariaHidden,
    ...props
}: IconProps) {
    const accessibleName = ariaLabel ?? title;
    const isAccessible = Boolean(accessibleName);

    return (
        <svg
            {...props}
            className={cn("shrink-0", className)}
            viewBox={ICON_DEFAULTS.VIEW_BOX}
            xmlns="http://www.w3.org/2000/svg"
            stroke={ICON_DEFAULTS.STROKE}
            strokeWidth={ICON_DEFAULTS.STROKE_WIDTH}
            fill={ICON_DEFAULTS.FILL}
            strokeLinecap={ICON_DEFAULTS.STROKE_LINE_CAP}
            strokeLinejoin={ICON_DEFAULTS.STROKE_LINE_JOIN}
            vectorEffect={ICON_DEFAULTS.VECTOR_EFFECT}
            focusable={ICON_DEFAULTS.FOCUSABLE}
            width={size}
            height={size}
            role={isAccessible ? "img" : undefined}
            aria-label={isAccessible ? accessibleName : undefined}
            aria-hidden={isAccessible ? undefined : (ariaHidden ?? true)}
        >
            {title ? <title>{title}</title> : null}
            {children}
        </svg>
    );
}
