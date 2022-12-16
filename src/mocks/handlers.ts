import { rest } from "msw";

export const handlers = [
  rest.get("https://dummyjson.com/users", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([{ name: "Terry" }, { name: "Sheldon" }, { name: "Terrill" }])
    );
  }),
];
