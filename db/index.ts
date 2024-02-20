import {drizzle} from "drizzle-orm/node-postgres";
import {Client} from "pg";

export const client = new Client({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});
// { schema } is used for relational queries
export const db = (schema: any) => drizzle(client, { schema });
