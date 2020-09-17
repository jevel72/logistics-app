import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimEditorComponent } from './claim-editor.component';

describe('ClaimEditorComponent', () => {
  let component: ClaimEditorComponent;
  let fixture: ComponentFixture<ClaimEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaimEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
