import { activity } from "../components/activity";
import { defineIconRegistry } from "./validation";

export const ICON_REGISTRY = defineIconRegistry({ activity });

type IconRegistry = typeof ICON_REGISTRY;
type IconSlug = keyof IconRegistry;

export type { IconRegistry, IconSlug };
