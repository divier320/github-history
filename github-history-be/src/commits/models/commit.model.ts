import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Commit {
  @Field((type) => Int, { nullable: true })
  id?: number;
}
