import { Field, ObjectType } from '@nestjs/graphql';
import { Author } from './author.model';

@ObjectType()
export class Commit {
  @Field()
  sha: string;

  @Field()
  message: string;

  @Field()
  author: Author;
}
