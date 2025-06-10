import { json } from "@tanstack/react-start";
import { createAPIFileRoute } from "@tanstack/react-start/api";
import axios from "redaxios";
import { consoleLogger } from "~/utils/console-logger";
import type { User } from "~/utils/users";

export const APIRoute = createAPIFileRoute("/api/users")({
  GET: async ({ request }) => {
    consoleLogger.info("Fetching users... @", request.url);
    const res = await axios.get<Array<User>>("https://jsonplaceholder.typicode.com/users");

    const list = res.data.slice(0, 10);

    return json(list.map((u) => ({ id: u.id, name: u.name, email: u.email })));
  },
});
