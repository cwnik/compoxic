import type { RegisteredIcon } from "../types";
import { ICON_CATEGORIES } from "../constants/categories";

const SLUG_AND_TAG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

type IconRegistryMap = Readonly<Record<string, RegisteredIcon>>;

function validateIconRegistry(registry: IconRegistryMap): void {
    const errors: string[] = [];

    if (Object.keys(registry).length === 0) errors.push("Icon registry must contain at least one icon.");

    for (const [registrySlug, entry] of Object.entries(registry)) {
        const prefix = `[${registrySlug}]`;

        if (registrySlug !== entry.metadata.slug) errors.push(`${prefix} registry key must match metadata.slug.`);
        if (!SLUG_AND_TAG_PATTERN.test(entry.metadata.slug)) errors.push(`${prefix} slug must use kebab-case.`);
        if (!entry.metadata.displayName.trim()) errors.push(`${prefix} displayName is required.`);
        if (!/^Icon[A-Z][A-Za-z0-9]*$/.test(entry.metadata.componentName))
            errors.push(`${prefix} componentName must use the IconName convention.`);

        if (!new Set(Object.values(ICON_CATEGORIES).map((item) => item.value)).has(entry.metadata.category))
            errors.push(`${prefix} has an invalid category "${entry.metadata.category}".`);

        if (entry.metadata.tags.length === 0) errors.push(`${prefix} must contain at least one tag.`);
        if (new Set(entry.metadata.tags).size !== entry.metadata.tags.length)
            errors.push(`${prefix} tags must not contain duplicates.`);

        for (const tag of entry.metadata.tags)
            if (!SLUG_AND_TAG_PATTERN.test(tag)) errors.push(`${prefix} has an invalid tag "${tag}".`);

        if (typeof entry.component !== "function") errors.push(`${prefix} component must be a React component.`);
    }

    if (errors.length > 0) throw new Error(`Icon registry validation failed:\n\n${errors.join("\n")}`);
}

function defineIconRegistry<const T extends IconRegistryMap>(registry: T): T {
    if (process.env.NODE_ENV !== "production") validateIconRegistry(registry);
    return registry;
}

export { validateIconRegistry, defineIconRegistry };
