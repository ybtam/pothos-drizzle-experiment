import {builder} from "../builder.ts";
import {userObject} from "./object.ts";
import {users} from "./schema.ts";
import {db} from "../../db";

builder.mutationFields((t) => ({
  addUser: t.field({
    type: userObject,
    args: {
      name: t.arg.string({required: true})
    },
    resolve: async (parent, {name}) => {
      const newUser = await db.insert(users)
        .values({
        name
      })
        .returning()

      return newUser[0]
    }
  })
}))
