import { activity } from "../components/elements";
import { defineIconRegistry } from "./validation";

export const ICON_REGISTRY = defineIconRegistry({ activity });

type IconRegistry = typeof ICON_REGISTRY;
type IconSlug = keyof IconRegistry;

export type { IconRegistry, IconSlug };
