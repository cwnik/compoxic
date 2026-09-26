import { describe, expect, it, vi } from "vitest";

import type { RegisteredIcon } from "../types";
import { defineIcon } from "../lib/define-icon";
import { IconTest } from "../components/test";
import { defineIconRegistry, validateIconRegistry } from "./validation";

function createIcon(overrides: Partial<RegisteredIcon["metadata"]> = {}): RegisteredIcon {
    return defineIcon({
        metadata: {
            slug: "test-icon",
            displayName: "Test Icon",
            componentName: "IconTest",
            category: "miscellaneous",

            tags: ["test"],

            ...overrides
        },

        component: IconTest
    });
}

function createRegistry(
    icon: RegisteredIcon = createIcon(),
    registrySlug: string = icon.metadata.slug
): Readonly<Record<string, RegisteredIcon>> {
    return { [registrySlug]: icon };
}

describe("validateIconRegistry", () => {
    it("accepts a valid icon registry", () => {
        expect(() => validateIconRegistry(createRegistry())).not.toThrow();
    });

    it("rejects an empty registry", () => {
        expect(() => validateIconRegistry({})).toThrow("Icon registry must contain at least one icon.");
    });

    it("rejects a registry key that does not match metadata.slug", () => {
        expect(() => validateIconRegistry(createRegistry(createIcon(), "wrong-slug"))).toThrow(
            "[wrong-slug] registry key must match metadata.slug."
        );
    });

    it("rejects an invalid slug", () => {
        const icon = createIcon({ slug: "Test Icon" });

        expect(() => validateIconRegistry(createRegistry(icon))).toThrow("[Test Icon] slug must use kebab-case.");
    });

    it("rejects a missing display name", () => {
        expect(() => validateIconRegistry(createRegistry(createIcon({ displayName: "   " })))).toThrow(
            "[test-icon] displayName is required."
        );
    });

    it("rejects an invalid component name", () => {
        expect(() => validateIconRegistry(createRegistry(createIcon({ componentName: "testIcon" })))).toThrow(
            "[test-icon] componentName must use the IconName convention."
        );
    });

    it("rejects an invalid category", () => {
        expect(() =>
            validateIconRegistry(
                createRegistry(createIcon({ category: "invalid" as RegisteredIcon["metadata"]["category"] }))
            )
        ).toThrow('[test-icon] has an invalid category "invalid".');
    });

    it("rejects an icon without tags", () => {
        expect(() => validateIconRegistry(createRegistry(createIcon({ tags: [] })))).toThrow(
            "[test-icon] must contain at least one tag."
        );
    });

    it("rejects duplicate tags", () => {
        expect(() => validateIconRegistry(createRegistry(createIcon({ tags: ["test", "test"] })))).toThrow(
            "[test-icon] tags must not contain duplicates."
        );
    });

    it("rejects an invalid tag", () => {
        expect(() => validateIconRegistry(createRegistry(createIcon({ tags: ["invalid_tag"] })))).toThrow(
            '[test-icon] has an invalid tag "invalid_tag".'
        );
    });

    it("rejects a non-function component", () => {
        expect(() =>
            validateIconRegistry(createRegistry({ ...createIcon(), component: null } as unknown as RegisteredIcon))
        ).toThrow("[test-icon] component must be a React component.");
    });

    it("aggregates multiple validation errors", () => {
        expect(() =>
            validateIconRegistry(
                createRegistry(
                    createIcon({
                        slug: "Invalid Slug",
                        displayName: " ",
                        componentName: "testIcon",
                        category: "invalid" as RegisteredIcon["metadata"]["category"],

                        tags: ["test", "test", "invalid_tag"]
                    }),

                    "registry-key"
                )
            )
        ).toThrow(
            [
                "Icon registry validation failed:",
                "",
                "[registry-key] registry key must match metadata.slug.",
                "[registry-key] slug must use kebab-case.",
                "[registry-key] displayName is required.",
                "[registry-key] componentName must use the IconName convention.",
                '[registry-key] has an invalid category "invalid".',
                "[registry-key] tags must not contain duplicates.",
                '[registry-key] has an invalid tag "invalid_tag".'
            ].join("\n")
        );
    });
});

describe("defineIconRegistry", () => {
    it("returns the original registry", () => {
        const registry = createRegistry();

        expect(defineIconRegistry(registry)).toBe(registry);
    });

    it("skips validation in production", () => {
        vi.stubEnv("NODE_ENV", "production");

        const registry = {};

        expect(defineIconRegistry(registry)).toBe(registry);

        vi.unstubAllEnvs();
    });
});
