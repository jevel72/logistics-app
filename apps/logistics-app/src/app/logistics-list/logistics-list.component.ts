import { Component, OnInit } from '@angular/core';

// rxjs
import { distinctUntilChanged } from 'rxjs/operators';

// until-destroy
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

// services
import { GetDataService } from '../services/get-data.service';
import { CacheService } from '../services/cache.service';

// interfaces
import { Claim } from './claim.interface';

@UntilDestroy()
@Component({
  selector: 'logistics-org-logistics-list',
  templateUrl: './logistics-list.component.html',
  styleUrls: ['./logistics-list.component.scss'],
})
export class LogisticsListComponent implements OnInit {
  constructor(private getData: GetDataService, private cache: CacheService) {}
  public claims: Claim[] = [];
  public displayedColumns: string[] = [
    'id',
    'datetime',
    'firm',
    'fullname',
    'phone',
    'comment',
    'ati',
  ];
  public initalizeData(): void {
    if (this.cache.getData('claims')) {
      this.claims = this.cache.getData('claims');
    } else {
      this.getData
        .fetchFrom('/api/claims')
        .pipe(distinctUntilChanged(), untilDestroyed(this))
        .subscribe((data) => {
          this.claims = data;
          this.cache.storeData('claims', data);
        });
    }
  }
  ngOnInit(): void {
    this.initalizeData();
  }
}
