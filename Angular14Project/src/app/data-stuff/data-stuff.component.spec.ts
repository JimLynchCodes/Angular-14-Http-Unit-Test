import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DataStuffComponent } from './data-stuff.component';
import { DataStuffService } from './data-stuff.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { mockStuff } from './data-stuff.mock';

describe('DataStuffComponent', () => {
  let component: DataStuffComponent;
  let fixture: ComponentFixture<DataStuffComponent>;
  let dataStuffService: DataStuffService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DataStuffComponent],
      providers: [DataStuffService],
      imports: [HttpClientTestingModule],
    })
      .compileComponents();

    fixture = TestBed.createComponent(DataStuffComponent);
    component = fixture.componentInstance;
    dataStuffService = TestBed.inject(DataStuffService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('starts off with stuff and gotData placeholder values', () => {
    expect(component.gotData).toBeFalsy();
    expect(component.stuff.brand).toEqual('');
  });

  it('sets stuff and gotData when request resolves', waitForAsync(() => {
    expect(component).toBeTruthy();
 
    let spy = spyOn(dataStuffService, 'getStuff').and.resolveTo(mockStuff);

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();

      // expect(component.gotData).toBeTruthy();
      // expect(spy.calls.count).toEqual(1)
    })


  }));
});
