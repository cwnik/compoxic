export const ICON_CATEGORIES = {
    ACTIVITY: "activity",
    CODING: "coding",
    NAVIGATION: "navigation",
    NOTIFICATIONS: "notifications",
    SYSTEM: "system"
} as const;

export type IconCategory = (typeof ICON_CATEGORIES)[keyof typeof ICON_CATEGORIES];
