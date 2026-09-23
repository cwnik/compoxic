import type { RegisteredIcon } from "../types";
import { ICON_CATEGORIES } from "../constants";

const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const COMPONENT_NAME_PATTERN = /^Icon[A-Z][A-Za-z0-9]*$/;
const TAG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

const VALID_PRIMITIVES = new Set(["path", "circle", "ellipse", "line", "polyline", "polygon", "rect"]);

const VALID_CATEGORIES = new Set(Object.values(ICON_CATEGORIES));

function validateIconRegistry(registry: Readonly<Record<string, RegisteredIcon>>) {
    const errors: string[] = [];

    if (Object.keys(registry).length === 0) errors.push("Icon registry must contain at least one icon.");

    for (const [registrySlug, entry] of Object.entries(registry)) {
        const { metadata, component } = entry;

        if (registrySlug !== metadata.slug)
            errors.push(`[${registrySlug}] Registry key does not match metadata.slug="${metadata.slug}".`);

        if (!SLUG_PATTERN.test(metadata.slug)) errors.push(`[${metadata.slug}] slug must be kebab-case.`);
        if (!metadata.displayName.trim()) errors.push(`[${metadata.slug}] displayName is required.`);
        if (!COMPONENT_NAME_PATTERN.test(metadata.componentName))
            errors.push(`[${metadata.slug}] componentName must look like "IconActivity".`);

        if (!metadata.description.trim()) errors.push(`[${metadata.slug}] description is required.`);
        if (!VALID_CATEGORIES.has(metadata.category))
            errors.push(`[${metadata.slug}] Unknown category "${metadata.category}".`);

        if (metadata.primitives.length === 0) errors.push(`[${metadata.slug}] At least one primitive is required.`);

        for (const primitive of metadata.primitives)
            if (!VALID_PRIMITIVES.has(primitive)) errors.push(`[${metadata.slug}] Unknown primitive "${primitive}".`);

        if (metadata.tags.length === 0) errors.push(`[${metadata.slug}] At least one tag is required.`);
        if (new Set(metadata.tags).size !== metadata.tags.length)
            errors.push(`[${metadata.slug}] tags must not contain duplicates.`);

        for (const tag of metadata.tags)
            if (!TAG_PATTERN.test(tag)) errors.push(`[${metadata.slug}] Invalid tag "${tag}".`);

        if (typeof component !== "function") errors.push(`[${metadata.slug}] component must be a React component.`);
    }

    if (errors.length > 0) throw new Error(`Icon registry validation failed:\n\n${errors.join("\n")}`);
}

function defineIconRegistry<const T extends Readonly<Record<string, RegisteredIcon>>>(registry: T): T {
    if (process.env.NODE_ENV !== "production") validateIconRegistry(registry);
    return registry;
}

export { validateIconRegistry, defineIconRegistry };
