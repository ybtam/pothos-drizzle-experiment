import {builder} from "../builder.ts";
import {users} from "./schema.ts";
import {userObject} from "./object.ts";
import {db} from "../../db";

builder.queryFields((t) => ({
  users: t.field({
    type: [userObject],
    resolve: async (parent, ) => {
      console.log(
        await db
        .select()
        .from(users)
      )

      const selectUsers = await db
        .select()
        .from(users);

      console.log(selectUsers)

      return selectUsers;
    }
  })
}))
