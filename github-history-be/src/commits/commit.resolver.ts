import { Args, Query, Resolver } from '@nestjs/graphql';
import { map } from 'rxjs';
import { CommitsService } from './commit.service';
import { Commit } from './models/commit.model';

@Resolver((of) => Commit)
export class CommitResolver {
  constructor(private commitService: CommitsService) {}

  @Query((returns) => [Commit])
  commits(@Args('owner') owner: string, @Args('name') name: string) {
    return this.commitService.findAll(owner, name).pipe(
      map((response) =>
        response.data.map((data) => ({
          sha: data.sha,
          message: data.commit.message,
          author: {
            ...data.commit.author,
            avatar_url: data.author.avatar_url,
          },
        })),
      ),
    );
  }
}
