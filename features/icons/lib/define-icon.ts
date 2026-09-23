import type { RegisteredIcon } from "../types";

export function defineIcon<const T extends RegisteredIcon>(icon: T): T {
    return icon;
}
