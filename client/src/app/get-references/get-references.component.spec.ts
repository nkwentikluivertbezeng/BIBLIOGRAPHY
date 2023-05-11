import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetReferencesComponent } from './get-references.component';

describe('GetReferencesComponent', () => {
  let component: GetReferencesComponent;
  let fixture: ComponentFixture<GetReferencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetReferencesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetReferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
