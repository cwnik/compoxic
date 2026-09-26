import { render, screen } from "@testing-library/react";
import { describe, expect, expectTypeOf, it } from "vitest";

import { IconBase, IconSecondary } from "../components/core";
import { ICON_CATEGORIES } from "../constants/categories";
import type { IconProps, RegisteredIcon } from "../types";
import { defineIcon } from "./define-icon";

function IconTest(props: IconProps) {
    return (
        <IconBase {...props}>
            <IconSecondary>
                <path d="M2 12L22 12" />
            </IconSecondary>
            <path d="M12 2V5" />
            <path d="M12 22V19" />
        </IconBase>
    );
}

const icon = {
    metadata: {
        slug: "test",
        displayName: "Test",
        componentName: "IconTest",
        category: ICON_CATEGORIES.MISCELLANEOUS.value,
        tags: ["test", "icon"]
    },

    component: IconTest
} satisfies RegisteredIcon<typeof IconTest>;

describe("defineIcon", () => {
    it("returns the same icon definition without changing it", () => {
        const defined = defineIcon(icon);

        expect(defined).toBe(icon);
        expectTypeOf(icon).toEqualTypeOf<typeof icon>();
    });

    it("preserves the registered React component", () => {
        const defined = defineIcon(icon);

        render(<defined.component size={24} title="Test Icon" />);

        expect(screen.getByRole("img", { name: "Test Icon" })).toBeInTheDocument();
    });
});
