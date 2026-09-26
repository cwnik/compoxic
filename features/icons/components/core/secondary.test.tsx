import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { IconSecondary } from "./secondary";
import type { IconProps } from "../../types";
import { IconBase } from "./base";

function IconTest(props: IconProps) {
    return (
        <IconBase {...props}>
            <IconSecondary>
                <path d="M2 12H6" />
            </IconSecondary>
        </IconBase>
    );
}

describe("IconSecondary", () => {
    it("renders a secondary tone group", () => {
        const group = render(<IconTest />).container.querySelector('[data-icon-tone="secondary"]');

        expect(group).toBeInTheDocument();
        expect(group).toHaveAttribute("stroke-opacity", "0.25");
    });

    it("renders its children unchanged", () => {
        const { container } = render(
            <IconBase>
                <IconSecondary>
                    <path data-testid="secondary-path" d="M2 12H6" />
                </IconSecondary>
            </IconBase>
        );

        const path = container.querySelector('[data-testid="secondary-path"]');

        expect(path).toHaveAttribute("d", "M2 12H6");
    });
});
