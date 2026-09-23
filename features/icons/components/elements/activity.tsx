import type { IconProps } from "../../types";
import { IconBase, IconSecondary } from "../core";
import { defineIcon } from "../../lib/define-icon";

function IconActivity(props: IconProps) {
    return (
        <IconBase {...props}>
            <IconSecondary>
                <path d="M2 12H6" />
                <path d="M18 12H22" />
            </IconSecondary>

            <path d="M6 12L8 10L10 14L12 2L14 22L18 12" />
        </IconBase>
    );
}

const activity = defineIcon({
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

export { IconActivity, activity };
