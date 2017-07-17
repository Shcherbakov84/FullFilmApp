import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedFilminfoComponent } from './detailed-filminfo.component';

describe('DetailedFilminfoComponent', () => {
  let component: DetailedFilminfoComponent;
  let fixture: ComponentFixture<DetailedFilminfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailedFilminfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedFilminfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
