import {builder} from "./builder.ts";
import './test/schema'
import './user'

export const schema = builder.toSchema()
