import {createYoga} from "graphql-yoga";
import bun from "bun";
import {schema} from "./schema.ts";

export function server() {
  const yoga = createYoga({
    schema,
  });

  const server = bun.serve({
    fetch: yoga,
    port: 4000,
  });

  console.info(
    `Server is running on ${new URL(
      yoga.graphqlEndpoint,
      `http://${server.hostname}:${server.port}`
    )}`
  )
}
