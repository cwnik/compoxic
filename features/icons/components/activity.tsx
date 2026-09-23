import { IconBase, IconSecondary } from "../core";
import type { IconProps, RegisteredIcon } from "../types";

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

const activity = {
    metadata: {
        slug: "activity",
        displayName: "Activity",
        category: "activity",
        componentName: "IconActivity",
        tone: "dual",
        description: "Represents activity or a live signal.",

        primitives: ["path"],
        tags: ["activity", "pulse", "signal", "monitoring", "trend"]
    },

    component: IconActivity
} as const satisfies RegisteredIcon;

export { IconActivity, activity };
