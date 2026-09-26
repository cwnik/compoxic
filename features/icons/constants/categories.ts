export const ICON_CATEGORIES = {} as const;

export type IconCategory = (typeof ICON_CATEGORIES)[keyof typeof ICON_CATEGORIES];
