import { render, screen } from "@testing-library/react";
import { rest } from "msw";
import Users from "./users";

import { server } from "../../mocks/server";

describe("users", () => {
  it("renders correctly", () => {
    render(<Users />);
    expect(screen.getByText(/users/i)).toBeInTheDocument();
  });

  it("renders a list of users", async () => {
    render(<Users />);
    const users = await screen.findAllByRole("listitem");
    expect(users).toHaveLength(3);
  });

  it("should display error", async () => {
    server.use(
      rest.get("https://dummyjson.com/users", (res, req, ctx) =>
        res(ctx.status(500))
      )
    );

    render(<Users />);

    expect(await screen.findByText(/error/i)).toBeInTheDocument();
  });
});
