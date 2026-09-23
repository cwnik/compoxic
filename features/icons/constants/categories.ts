export const ICON_CATEGORIES = {
    ACCESSIBILITY: "accessibility",
    ACTIVITY: "activity",
    CODING: "coding",
    COMMUNICATION: "communication",
    FILES: "files",
    NAVIGATION: "navigation",
    NOTIFICATIONS: "notifications",
    SYSTEM: "system",
    USER: "user"
} as const;

export type IconCategory = (typeof ICON_CATEGORIES)[keyof typeof ICON_CATEGORIES];
