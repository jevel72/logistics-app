import { Injectable } from '@nestjs/common';

import { Claim } from './claim.interface';

type Claims = Claim[];

@Injectable()
export class AppService {
  private claims: Claims = [
    {
      id: 1,
      datetime: Date.now(),
      firm: 'Airforce',
      fullname: 'James Hetfield',
      phone: 79873741284,
      comment: 'Fine',
      ati: 'https://ati.su/firms/32481/info',
    },
  ];
  public getClaims(): Claims {
    return this.claims;
  }
}
