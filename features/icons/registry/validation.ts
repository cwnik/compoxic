import type { RegisteredIcon } from "../types";
import { ICON_CATEGORIES } from "../constants";

const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const COMPONENT_NAME_PATTERN = /^Icon[A-Z][A-Za-z0-9]*$/;
const TAG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

const VALID_PRIMITIVES = new Set(["path", "circle", "ellipse", "line", "polyline", "polygon", "rect"]);

const VALID_CATEGORIES = new Set(Object.values(ICON_CATEGORIES));

type IconRegistryMap = Readonly<Record<string, RegisteredIcon>>;

function validateIconRegistry(registry: IconRegistryMap): void {
    const errors: string[] = [];

    if (Object.keys(registry).length === 0) errors.push("Icon registry must contain at least one icon.");

    for (const [registrySlug, entry] of Object.entries(registry)) {
        const { metadata, component } = entry;
        const prefix = `[${registrySlug}]`;

        if (registrySlug !== metadata.slug) errors.push(`${prefix} registry key must match metadata.slug.`);
        if (!SLUG_PATTERN.test(metadata.slug)) errors.push(`${prefix} slug must use kebab-case.`);
        if (!metadata.displayName.trim()) errors.push(`${prefix} displayName is required.`);
        if (!COMPONENT_NAME_PATTERN.test(metadata.componentName))
            errors.push(`${prefix} componentName must use the IconName convention.`);

        if (metadata.tone !== "dual") errors.push(`${prefix} must use the dual tone mode.`);
        if (!metadata.description.trim()) errors.push(`${prefix} description is required.`);
        if (!VALID_CATEGORIES.has(metadata.category))
            errors.push(`${prefix} has an invalid category "${metadata.category}".`);

        if (metadata.primitives.length === 0) errors.push(`${prefix} must declare at least one primitive.`);
        for (const primitive of metadata.primitives)
            if (!VALID_PRIMITIVES.has(primitive)) errors.push(`${prefix} has an invalid primitive "${primitive}".`);

        if (metadata.tags.length === 0) errors.push(`${prefix} must contain at least one tag.`);
        if (new Set(metadata.tags).size !== metadata.tags.length)
            errors.push(`${prefix} tags must not contain duplicates.`);

        for (const tag of metadata.tags)
            if (!TAG_PATTERN.test(tag)) errors.push(`${prefix} has an invalid tag "${tag}".`);

        if (typeof component !== "function") errors.push(`${prefix} component must be a React component.`);
    }

    if (errors.length > 0) throw new Error(`Icon registry validation failed:\n\n${errors.join("\n")}`);
}

function defineIconRegistry<const T extends IconRegistryMap>(registry: T): T {
    if (process.env.NODE_ENV !== "production") validateIconRegistry(registry);
    return registry;
}

export { validateIconRegistry, defineIconRegistry };
