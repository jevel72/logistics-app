import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';

import { Claim } from '../logistics-list/claim.interface';

@Component({
  selector: 'logistics-org-claim-editor',
  templateUrl: './claim-editor.component.html',
  styleUrls: ['./claim-editor.component.scss'],
})
export class ClaimEditorComponent {
  constructor(private router: Router, private fb: FormBuilder) {
    this.initialize();
  }
  public caption: string = '';
  public claim: Claim = null;
  public claimForm: FormGroup = null;
  private initialize(): void {
    const state = this.router.getCurrentNavigation().extras.state;
    this.caption = state.caption;
    this.claim = state?.payload;
    this.claimForm = this.fb.group({
      id: [this.claim?.id, [Validators.required]],
      datetime: [this.claim?.datetime, [Validators.required]],
      firm: [this.claim?.firm, [Validators.required]],
      fullname: [this.claim?.fullname, [Validators.required]],
      phone: [this.claim?.phone, [Validators.required]],
      comment: [this.claim?.comment, [Validators.required]],
      ati: [this.claim?.ati, [Validators.required]],
    });
  }
}
