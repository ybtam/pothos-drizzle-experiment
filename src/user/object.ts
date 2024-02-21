import {builder} from "../builder.ts";
import type {selectUser} from "./schema.ts";

export const userObject = builder.objectRef<selectUser>('User').implement({
  description: 'A user',
  fields: (t) => ({
    id: t.field({
      type: 'Int',
      resolve: (user) => user.id,
    }),
    name: t.field({
      type: 'String',
      resolve: (user) => user.name,
    }),
  }),
})
