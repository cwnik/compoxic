import { Fragment } from "react";

import type { IconProps } from "../types";
import { IconBase, IconSecondary } from "./core";

export function IconTest({ children, isSecondary, ...props }: IconProps & { isSecondary?: boolean }) {
    const Component = isSecondary ? IconSecondary : Fragment;

    return (
        <IconBase {...props}>
            <Component>{children ?? <path d="M2 12H22" />}</Component>
        </IconBase>
    );
}
