import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { Author } from "../models/Author";

import { CreateAuthorInput } from "../inputs/CreateAuthorInput";


@Resolver()
export class AuthorResolver {
  @Query(() => [Author])
  authors() {
    return Author.find();
  }

  @Query(() => Author)
  author(@Arg("id") id: string) {
    return Author.findOne({ where: { id } });
  }

  @Mutation(() => Author)
  async createAuthor(@Arg("data") data: CreateAuthorInput) {
    const author = Author.create(data);
    await author.save();
    return author;
  }

 

}
