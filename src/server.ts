import {createYoga} from "graphql-yoga";
import {schema} from "./schema.ts";
import bun from "bun";

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
