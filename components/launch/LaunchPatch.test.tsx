import { render, screen } from "@testing-library/react";
import LaunchPatch from "./LaunchPatch";

describe("LaunchPatch Component", () => {
    test("shows picture if exist", () => {
        render(<LaunchPatch
            small="https://example.com/patch_small.png"
            large="https://example.com/patch_large.png"
            size={64}
            enableModal={true}
        />);

        const img = screen.getByRole("img");
        expect(img).toBeInTheDocument();
    });

    test("no renders if isn't a picture", () => {
        const { container } = render(<LaunchPatch
            small = {null}
            large = {null}
            size={64}
            enableModal={true}
        />);
        expect(container.firstChild).toBeNull();
    });
});
