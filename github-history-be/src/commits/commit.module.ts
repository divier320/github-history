import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { CommitResolver } from './commit.resolver';
import { CommitsService } from './commit.service';

@Module({
  imports: [HttpModule],
  providers: [CommitResolver, CommitsService],
})
export class CommitModule {}
