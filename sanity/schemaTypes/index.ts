import { type SchemaTypeDefinition } from "sanity";
import author from "./author";
import post from "./post";
import event from "./event";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [author, post, event],
};
