import type { ComponentPropsWithoutRef, ComponentType, ReactNode } from "react";

import type { IconCategory } from "./constants/categories";

type IconProps = Omit<
    ComponentPropsWithoutRef<"svg">,
    | "children"
    | "viewBox"
    | "xmlns"
    | "stroke"
    | "strokeWidth"
    | "strokeLinecap"
    | "strokeLinejoin"
    | "fill"
    | "vectorEffect"
    | "focusable"
    | "width"
    | "height"
> & { children?: ReactNode; size?: number | string; title?: string };

type IconComponent = ComponentType<IconProps>;

type IconDefinition = {
    slug: string;
    displayName: string;
    componentName: string;
    category: IconCategory;
    tags: string[];
};

type RegisteredIcon<TComponent extends IconComponent = IconComponent> = {
    metadata: IconDefinition;
    component: TComponent;
};

export type { IconProps, IconComponent, IconDefinition, RegisteredIcon };
