import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";

import Counter from "./conter";
describe("Counter", () => {
  it("should renders correctly", () => {
    render(<Counter count={0} />);
    expect(screen.getByText(/counter/i)).toBeInTheDocument();
  });

  it("handlers are called", async () => {
    user.setup();

    const incrementHandler = jest.fn();
    const decrementHandler = jest.fn();

    render(
      <Counter
        count={0}
        handleIncrement={incrementHandler}
        handleDecrement={decrementHandler}
      />
    );

    await user.click(screen.getByRole("button", { name: "Increment" }));
    await user.click(screen.getByRole("button", { name: "Decrement" }));

    expect(incrementHandler).toHaveBeenCalled();
    expect(decrementHandler).toHaveBeenCalled();
  });
});
