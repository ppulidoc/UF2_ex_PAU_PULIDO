import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompProvesComponent } from './comp-proves.component';

describe('CompProvesComponent', () => {
  let component: CompProvesComponent;
  let fixture: ComponentFixture<CompProvesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompProvesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompProvesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
