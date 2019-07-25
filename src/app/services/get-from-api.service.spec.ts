import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { GetFromAPIService } from './get-from-api.service';

describe('GetFromAPIService', () => {
  
  let service: GetFromAPIService;
  let httpMock: HttpTestingController;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GetFromAPIService]
    });
    service = TestBed.get(GetFromAPIService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    const service: GetFromAPIService = TestBed.get(GetFromAPIService);
    expect(service).toBeTruthy();
  });

  it('should get first character from the Star Wars API', () => {
    service.getResults("people/1").subscribe((data: any) => {
      expect(data.name).toBe('Luke Skywalker');
    });

    const req = httpMock.expectOne("https://swapi.co/api/people/1", 'Call API');
    expect(req.request.method).toBe('GET');

    req.flush({
      name: 'Luke Skywalker'
    });

    httpMock.verify();

  });

  it('should get all the characters from the Star Wars API', () => {
    service.getResults("people").subscribe((data: any) => {
      expect(data.count).toBe(87);
    });
    
    const req = httpMock.expectOne("https://swapi.co/api/people", 'Call API');
    expect(req.request.method).toBe('GET');

    req.flush({
      count: 87
    });

    httpMock.verify();
  });

});
