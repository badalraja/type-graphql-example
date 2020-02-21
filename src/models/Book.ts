import { Entity, BaseEntity, PrimaryGeneratedColumn, Column,ManyToOne, JoinColumn, PrimaryColumn} from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";
import { Author } from "./Author";

@Entity()
@ObjectType()
export class Book extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: string;

  @Field(() => String)
  @Column()
  title: string;

  @PrimaryColumn()
  authorId: number;

  @Field(() => Author)
  @ManyToOne(() => Author, author => author.books, { primary: true })
  @JoinColumn({ name: "authorId" })
  author: Promise<Author>;

  @Field(() => Boolean)
  @Column({ default: false })
  isPublished: boolean;
}
