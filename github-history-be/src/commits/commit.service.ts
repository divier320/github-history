import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AxiosResponse } from 'axios';
import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';

@Injectable()
export class CommitsService {
  GITHUB_API_BASE = this.configService.get('GITHUB_API_BASE');

  constructor(
    private configService: ConfigService,
    private httpService: HttpService,
  ) {}

  findAll(owner: string, name: string): Observable<AxiosResponse<any, any>> {
    const url = `${this.GITHUB_API_BASE}/repos/${owner}/${name}/commits`;
    return this.httpService.get(url);
  }
}
