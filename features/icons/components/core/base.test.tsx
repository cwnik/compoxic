import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { IconBase } from "./base";

describe("IconBase", () => {
    it("renders the canonical SVG attributes", () => {
        const { container } = render(
            <IconBase>
                <path d="M2 12H22" />
            </IconBase>
        );

        const svg = container.querySelector("svg");

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

    it("uses the default size", () => {
        const { container } = render(
            <IconBase>
                <path d="M2 12H22" />
            </IconBase>
        );

        const svg = container.querySelector("svg");

        expect(svg).toHaveAttribute("width", "24");
        expect(svg).toHaveAttribute("height", "24");
    });

    it("supports a custom size", () => {
        const { container } = render(
            <IconBase size={32}>
                <path d="M2 12H22" />
            </IconBase>
        );

        const svg = container.querySelector("svg");

        expect(svg).toHaveAttribute("width", "32");
        expect(svg).toHaveAttribute("height", "32");
    });

    it("is decorative by default", () => {
        const { container } = render(
            <IconBase>
                <path d="M2 12H22" />
            </IconBase>
        );

        const svg = container.querySelector("svg");

        expect(svg).toHaveAttribute("aria-hidden", "true");
        expect(svg).not.toHaveAttribute("role");
        expect(svg).not.toHaveAttribute("aria-label");
    });

    it("becomes accessible when given an aria-label", () => {
        const { container } = render(
            <IconBase aria-label="Activity">
                <path d="M2 12H22" />
            </IconBase>
        );

        const svg = container.querySelector("svg");

        expect(svg).toHaveAttribute("role", "img");
        expect(svg).toHaveAttribute("aria-label", "Activity");
        expect(svg).not.toHaveAttribute("aria-hidden");
    });

    it("becomes accessible when given a title", () => {
        const { container } = render(
            <IconBase title="Activity">
                <path d="M2 12H22" />
            </IconBase>
        );

        const svg = container.querySelector("svg");
        const title = svg?.querySelector("title");

        expect(svg).toHaveAttribute("role", "img");
        expect(svg).toHaveAttribute("aria-label", "Activity");
        expect(title).not.toBeNull();
        expect(title).toHaveTextContent("Activity");
    });

    it("prefers aria-label over title for the accessible name", () => {
        const { container } = render(
            <IconBase title="Activity icon" aria-label="Current activity">
                <path d="M2 12H22" />
            </IconBase>
        );

        const svg = container.querySelector("svg");

        expect(svg).toHaveAttribute("aria-label", "Current activity");
    });

    it("renders children without modifying their geometry", () => {
        const { container } = render(
            <IconBase>
                <path data-testid="icon-path" d="M2 12H22" />
            </IconBase>
        );

        const path = container.querySelector('[data-testid="icon-path"]');

        expect(path).toHaveAttribute("d", "M2 12H22");
    });
});
