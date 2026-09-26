import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { IconTest } from "../test";

describe("IconSecondary", () => {
    it("renders a secondary tone group", () => {
        const group = render(<IconTest isSecondary />).container.querySelector('[data-icon-tone="secondary"]');

        expect(group).toBeInTheDocument();
        expect(group).toHaveAttribute("stroke-opacity", "0.25");
    });

    it("renders its children unchanged", () => {
        const { container } = render(
            <IconTest isSecondary>
                <path data-testid="secondary-path" d="M2 12H6" />
            </IconTest>
        );

        const path = container.querySelector('[data-testid="secondary-path"]');

        expect(path).toHaveAttribute("d", "M2 12H6");
    });
});
