import { describe, expect, it } from "vitest";

import { ICON_REGISTRY } from "./registry";
import { validateIconRegistry } from "./validation";
import type { RegisteredIcon } from "../types";
import { IconActivity } from "../components/activity";

describe("ICON_REGISTRY", () => {
    it("contains registered icons", () => {
        expect(Object.keys(ICON_REGISTRY)).toContain("activity");
    });

    it("keeps registry keys aligned with metadata slugs", () => {
        for (const [slug, entry] of Object.entries(ICON_REGISTRY)) expect(entry.metadata.slug).toBe(slug);
    });

    it("registers the correct component", () => {
        expect(ICON_REGISTRY.activity.component).toBe(IconActivity);
    });

    it("passes registry validation", () => {
        expect(() => validateIconRegistry(ICON_REGISTRY)).not.toThrow();
    });
});

describe("validateIconRegistry", () => {
    it("rejects an empty registry", () => {
        expect(() => validateIconRegistry({})).toThrow("Icon registry validation failed");
    });

    it("rejects a mismatched registry key and slug", () => {
        const invalidRegistry = {
            activity: {
                metadata: {
                    slug: "different-slug",
                    displayName: "Activity",
                    componentName: "IconActivity",
                    description: "Represents activity or a live signal.",
                    category: "activity",
                    primitives: ["path"],
                    tags: ["activity"]
                },
                component: IconActivity
            }
        } as unknown as Record<string, RegisteredIcon>;

        expect(() => validateIconRegistry(invalidRegistry)).toThrow("registry key must match metadata.slug");
    });

    it("rejects invalid slugs", () => {
        const invalidRegistry = {
            "Activity Icon": {
                metadata: {
                    slug: "Activity Icon",
                    displayName: "Activity",
                    componentName: "IconActivity",
                    description: "Represents activity or a live signal.",
                    category: "activity",
                    primitives: ["path"],
                    tags: ["activity"]
                },
                component: IconActivity
            }
        } as unknown as Record<string, RegisteredIcon>;

        expect(() => validateIconRegistry(invalidRegistry)).toThrow("slug must use kebab-case");
    });

    it("rejects duplicate tags", () => {
        const invalidRegistry = {
            activity: {
                metadata: {
                    slug: "activity",
                    displayName: "Activity",
                    componentName: "IconActivity",
                    description: "Represents activity or a live signal.",
                    category: "activity",
                    primitives: ["path"],
                    tags: ["activity", "activity"]
                },
                component: IconActivity
            }
        } as unknown as Record<string, RegisteredIcon>;

        expect(() => validateIconRegistry(invalidRegistry)).toThrow("tags must not contain duplicates");
    });
});
