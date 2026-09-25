import type { IconProps } from "@/features/icons/types";
import { defineIcon } from "@/features/icons/lib/define-icon";

import { IconBase, IconSecondary } from "../core";

function IconActivity(props: IconProps) {
    return (
        <IconBase {...props}>
            <IconSecondary>
                <rect x="1" y="1" width="22" height="22" rx="8" />
            </IconSecondary>
            <path d="M4.5 12L6.30574 12C7.28342 12 8.1178 11.2932 8.27853 10.3288L8.76701 7.39794C8.99912 6.00528 11.0009 6.00527 11.233 7.39794L12 12L12.767 16.602C12.9991 17.9947 15.0009 17.9947 15.233 16.602L15.7215 13.6712C15.8822 12.7068 16.7166 12 17.6943 12L19.5 12" />
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
        tags: ["activity", "pulse", "heartbeat", "ecg", "health", "monitoring", "signal"]
    },
    component: IconActivity
});

export { IconActivity, activity };
