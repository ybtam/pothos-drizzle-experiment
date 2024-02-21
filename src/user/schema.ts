import {pgTable, serial, text} from "drizzle-orm/pg-core";
import {relations} from "drizzle-orm";
import {posts} from "../post/schema.ts";

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
});
export const usersRelations = relations(users, ({ many }) => ({
  posts: many(posts),
}));

export type selectUser =  typeof users.$inferSelect;
