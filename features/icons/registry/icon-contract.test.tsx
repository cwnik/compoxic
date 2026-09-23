import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { ICON_REGISTRY } from "./registry";

for (const [slug, entry] of Object.entries(ICON_REGISTRY))
    describe(`${slug} icon contract`, () => {
        it("renders the canonical SVG structure", () => {
            const Icon = entry.component;

            const { container } = render(<Icon aria-label={entry.metadata.displayName} />);

            const svg = container.querySelector("svg");

            expect(svg).toBeInTheDocument();
            expect(svg).toHaveAttribute("viewBox", "0 0 24 24");
            expect(svg).toHaveAttribute("xmlns", "http://www.w3.org/2000/svg");
            expect(svg).toHaveAttribute("stroke", "currentColor");
            expect(svg).toHaveAttribute("stroke-width", "2");
            expect(svg).toHaveAttribute("fill", "none");
            expect(svg).toHaveAttribute("stroke-linecap", "round");
            expect(svg).toHaveAttribute("stroke-linejoin", "round");
            expect(svg).toHaveAttribute("vector-effect", "non-scaling-stroke");
            expect(svg).toHaveAttribute("focusable", "false");
        });

        it("renders the dual-tone secondary layer", () => {
            const Icon = entry.component;

            const { container } = render(<Icon />);

            const secondary = container.querySelector('[data-icon-tone="secondary"]');

            expect(secondary).toBeInTheDocument();
            expect(secondary).toHaveAttribute("stroke-opacity", "0.25");
        });

        it("is decorative by default", () => {
            const Icon = entry.component;

            const { container } = render(<Icon />);

            const svg = container.querySelector("svg");

            expect(svg).toHaveAttribute("aria-hidden", "true");
            expect(svg).not.toHaveAttribute("role");
            expect(svg).not.toHaveAttribute("aria-label");
        });

        it("supports an accessible name", () => {
            const Icon = entry.component;

            const { container } = render(<Icon aria-label={entry.metadata.displayName} />);

            const svg = container.querySelector("svg");

            expect(svg).toHaveAttribute("role", "img");
            expect(svg).toHaveAttribute("aria-label", entry.metadata.displayName);
            expect(svg).not.toHaveAttribute("aria-hidden");
        });
    });
