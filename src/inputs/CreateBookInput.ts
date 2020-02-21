import { InputType, Field } from "type-graphql";

@InputType()
export class CreateBookInput {
  @Field()
  title: string;

  @Field()
  authorId: number;

  @Field()
  isPublished: boolean;

}
