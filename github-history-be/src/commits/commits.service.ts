import { Injectable } from '@nestjs/common';
import { Commit } from './models/commit.model';

@Injectable()
export class CommitsService {
  async findAll(): Promise<Commit[]> {
    return [{ id: 1 }] as Commit[];
  }
}
