import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { IconBase } from "./base";
import type { IconProps } from "../../types";

function IconTest(props: IconProps) {
    return (
        <IconBase {...props}>
            <path d="M2 12H22" />
        </IconBase>
    );
}

describe("IconBase", () => {
    it("renders the canonical SVG attributes", () => {
        const svg = render(<IconTest />).container.querySelector("svg");

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
        const svg = render(<IconTest />).container.querySelector("svg");

        expect(svg).toHaveAttribute("width", "24");
        expect(svg).toHaveAttribute("height", "24");
    });

    it("supports a custom size", () => {
        const svg = render(<IconTest size={32} />).container.querySelector("svg");

        expect(svg).toHaveAttribute("width", "32");
        expect(svg).toHaveAttribute("height", "32");
    });

    it("is decorative by default", () => {
        const svg = render(<IconTest />).container.querySelector("svg");

        expect(svg).toHaveAttribute("aria-hidden", "true");
        expect(svg).not.toHaveAttribute("role");
        expect(svg).not.toHaveAttribute("aria-label");
    });

    it("becomes accessible when given an aria-label", () => {
        const svg = render(<IconTest aria-label="Activity" />).container.querySelector("svg");

        expect(svg).toHaveAttribute("role", "img");
        expect(svg).toHaveAttribute("aria-label", "Activity");
        expect(svg).not.toHaveAttribute("aria-hidden");
    });

    it("becomes accessible when given a title", () => {
        const svg = render(<IconTest title="Activity" />).container.querySelector("svg");
        const title = svg?.querySelector("title");

        expect(svg).toHaveAttribute("role", "img");
        expect(svg).toHaveAttribute("aria-label", "Activity");
        expect(title).not.toBeNull();
        expect(title).toHaveTextContent("Activity");
    });

    it("prefers aria-label over title for the accessible name", () => {
        const svg = render(<IconTest title="Activity" aria-label="Current activity" />).container.querySelector("svg");

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
