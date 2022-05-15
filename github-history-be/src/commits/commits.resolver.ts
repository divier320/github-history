import { Query, Resolver } from '@nestjs/graphql';
import { CommitsService } from './commits.service';
import { Commit } from './models/commit.model';

@Resolver((of) => Commit)
export class CommitResolver {
  constructor(private commitService: CommitsService) {}

  @Query((returns) => [Commit])
  async commits() {
    return this.commitService.findAll()
  }
}
