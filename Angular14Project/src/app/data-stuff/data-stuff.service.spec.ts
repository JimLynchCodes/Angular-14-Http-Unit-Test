import { TestBed } from '@angular/core/testing';

import { DataStuffService } from './data-stuff.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

// Other imports
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Data } from '@angular/router';
import { mockStuff } from './data-stuff.mock';


describe('DataStuffService', () => {
  let service: DataStuffService;
  let httpClient: HttpClient;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    // Inject the http service and test controller for each test
    httpClient = TestBed.inject(HttpClient);
    httpController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(DataStuffService)
  });

  it('should call getAllBooks and return an array of Books', () => {

    // 1
    service.getStuff().then((res) => {
      //2
      expect(res).toEqual(mockStuff);
    });

    //3
    const req = httpController.expectOne({
      method: 'GET',
      url: `https://dummyjson.com/products/1`,
    });

    //4
    req.flush(mockStuff);
  });

  it('should return and error when http request fails', () => {



  })

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
