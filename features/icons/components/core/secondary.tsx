import type { ReactNode } from "react";

import { ICON_DEFAULTS } from "../../constants/defaults";

type IconSecondaryProps = { children: ReactNode };

export function IconSecondary({ children }: IconSecondaryProps) {
    return (
        <g data-icon-tone="secondary" strokeOpacity={ICON_DEFAULTS.SECONDARY_STROKE_OPACITY}>
            {children}
        </g>
    );
}
