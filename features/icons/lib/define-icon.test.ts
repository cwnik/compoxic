import { describe, expect, it } from "vitest";

import { defineIcon } from "./define-icon";
import { IconActivity } from "../components/elements";
import { ICON_CATEGORIES } from "../constants/categories";

describe("defineIcon", () => {
    it("returns the icon definition unchanged", () => {
        const icon = defineIcon({
            metadata: {
                slug: "activity",
                displayName: "Activity",
                componentName: "IconActivity",
                category: ICON_CATEGORIES.ACTIVITY,

                tags: ["activity", "signal", "pulse"]
            },

            component: IconActivity
        });

        expect(icon.metadata.slug).toBe("activity");
        expect(icon.metadata.displayName).toBe("Activity");
        expect(icon.metadata.componentName).toBe("IconActivity");
        expect(icon.metadata.category).toBe("activity");
        expect(icon.component).toBe(IconActivity);
    });
});
