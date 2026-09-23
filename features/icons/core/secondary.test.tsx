import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { IconSecondary } from "./secondary";

describe("IconSecondary", () => {
    it("renders a secondary tone group", () => {
        const { container } = render(
            <svg>
                <IconSecondary>
                    <path d="M2 12H6" />
                </IconSecondary>
            </svg>
        );

        const group = container.querySelector('[data-icon-tone="secondary"]');

        expect(group).toBeInTheDocument();
        expect(group).toHaveAttribute("stroke-opacity", "0.25");
    });

    it("renders its children unchanged", () => {
        const { container } = render(
            <svg>
                <IconSecondary>
                    <path data-testid="secondary-path" d="M2 12H6" />
                </IconSecondary>
            </svg>
        );

        const path = container.querySelector('[data-testid="secondary-path"]');

        expect(path).toHaveAttribute("d", "M2 12H6");
    });
});
