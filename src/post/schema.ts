import {integer, pgTable, serial, text} from "drizzle-orm/pg-core";
import {relations} from "drizzle-orm";
import {users} from "../user/schema.ts";

export const posts = pgTable('posts', {
  id: serial('id').primaryKey(),
  content: text('content').notNull(),
  authorId: integer('author_id').notNull(),
});
export const postsRelations = relations(posts, ({ one }) => ({
  author: one(users, { fields: [posts.authorId], references: [users.id] }),
}));
