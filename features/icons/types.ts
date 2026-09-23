import type { ComponentPropsWithoutRef, ComponentType, ReactNode } from "react";

import type { IconCategory } from "./constants";

type IconPrimitive = "path" | "circle" | "ellipse" | "line" | "polyline" | "polygon" | "rect";

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
    tone: "dual";
    description: string;
    category: IconCategory;
    primitives: readonly IconPrimitive[];
    tags: readonly string[];
};

type RegisteredIcon<TComponent extends IconComponent = IconComponent> = {
    metadata: IconDefinition;
    component: TComponent;
};

export type { IconPrimitive, IconProps, IconComponent, IconDefinition, RegisteredIcon };
