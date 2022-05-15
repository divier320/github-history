import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Author {
  @Field()
  name: string;

  @Field()
  email: string;

  @Field({ nullable: true })
  avatar_url?: string;
}
