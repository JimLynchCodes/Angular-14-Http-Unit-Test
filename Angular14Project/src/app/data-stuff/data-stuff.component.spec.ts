import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataStuffComponent } from './data-stuff.component';

describe('DataStuffComponent', () => {
  let component: DataStuffComponent;
  let fixture: ComponentFixture<DataStuffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataStuffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataStuffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
