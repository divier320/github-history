import { Module } from '@nestjs/common';
import { CommitResolver } from './commits.resolver';
import { CommitsService } from './commits.service';

@Module({
  providers: [CommitResolver, CommitsService],
})
export class CommitsModule {}
