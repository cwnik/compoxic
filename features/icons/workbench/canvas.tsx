import type { ComponentProps } from "react";
import { cn } from "cn";

interface CanvasProps extends ComponentProps<"div"> {
    showGuide?: boolean;
}

export function Canvas({ showGuide = true, className, children, ...props }: CanvasProps) {
    return (
        <div className="flex min-h-svh items-center justify-center">
            <div
                className={cn(
                    "relative size-180 overflow-hidden border-e border-b bg-white bg-size-[30px_30px]",
                    "bg-[repeating-linear-gradient(to_right,var(--color-border)_0,var(--color-border)_1px,transparent_1px,transparent_30px),repeating-linear-gradient(to_bottom,var(--color-border)_0,var(--color-border)_1px,transparent_1px,transparent_30px)]",
                    className
                )}
                {...props}
            >
                {showGuide && <IconTemplateGuide />}
                {children}
            </div>
        </div>
    );
}

function IconTemplateGuide() {
    return (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <svg
                viewBox="0 0 24 24"
                stroke="color-mix(in oklab,var(--color-accent-foreground) 20%, transparent)"
                strokeWidth="0.05"
                className="size-full"
                fill="none"
                aria-hidden="true"
            >
                <path
                    d="
                    M0.5 0.5L23.5 0.5 23.5 23.5 0.5 23.5 0.5 0.5M5.5 1H18.5Q20 1 20 2.5V21.5Q20 23 18.5 23H5.5Q4 23 4 21.5V2.5Q4 1 5.5 1Z
                    M3.5 2H20.5Q22 2 22 3.5V20.5Q22 22 20.5 22H3.5Q2 22 2 20.5V3.5Q2 2 3.5 2Z
                    M2.5 3H21.5Q23 3 23 4.5V19.5Q23 21 21.5 21H2.5Q1 21 1 19.5V4.5Q1 3 2.5 3Z
                    M1 1H23V23H1V1
                    M12 1A11 11 0 1 1 12 23 A11 11 0 1 1 12 1Z
                    M12 7A5 5 0 1 1 12 17 A5 5 0 1 1 12 7Z
                    M12 12V10V14M12 12H10H14M0 0L24 24M24 0L0 24
                    M4 0V24M8 0V24M12 0V24M16 0V24M20 0V24
                    M0 4H24M0 8H24M0 12H24M0 16H24M0 20H24
                    "
                />
            </svg>
        </div>
    );
}
