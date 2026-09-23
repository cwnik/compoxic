import { describe, expect, it } from "vitest";

import { defineIcon } from "./define-icon";
import { IconActivity } from "../components/elements";

describe("defineIcon", () => {
    it("returns the icon definition unchanged", () => {
        const icon = defineIcon({
            metadata: {
                slug: "activity",
                displayName: "Activity",
                componentName: "IconActivity",
                tone: "dual",
                description: "Represents activity or a live signal.",
                category: "activity",
                primitives: ["path"],
                tags: ["activity", "signal", "pulse"]
            },
            component: IconActivity
        });

        expect(icon.component).toBe(IconActivity);
        expect(icon.metadata.slug).toBe("activity");
        expect(icon.metadata.tone).toBe("dual");
    });
});
