import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvicesListComponent } from './advices-list.component';

describe('AdvicesListComponent', () => {
  let component: AdvicesListComponent;
  let fixture: ComponentFixture<AdvicesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvicesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvicesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
