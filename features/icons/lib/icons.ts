import { ICON_REGISTRY } from "../registry";
import type { IconSlug } from "../registry";

function isIconSlug(slug: string): slug is IconSlug {
    return Object.hasOwn(ICON_REGISTRY, slug);
}

function getIconMetadata(slug: IconSlug) {
    return ICON_REGISTRY[slug].metadata;
}

function getIconComponent(slug: IconSlug) {
    return ICON_REGISTRY[slug].component;
}

export { isIconSlug, getIconMetadata, getIconComponent };
