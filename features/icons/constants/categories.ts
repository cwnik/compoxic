export const ICON_CATEGORIES = {
    NAVIGATION: { label: "Navigation & Direction", value: "navigation" },
    COMMUNICATION: { label: "Messages & Communication", value: "communication" },
    USER: { label: "User & People", value: "user" },
    ACTIONS: { label: "Actions & Editing", value: "actions" },
    INTERFACE: { label: "Interface & Controls", value: "interface" },
    MEDIA: { label: "Media & Files collection", value: "media" },
    COMMERCE: { label: "Commerce & Payments", value: "commerce" },
    MISCELLANEOUS: { label: "Miscellaneous & Others", value: "miscellaneous" }
} as const;

export type IconCategory = (typeof ICON_CATEGORIES)[keyof typeof ICON_CATEGORIES]["value"];
