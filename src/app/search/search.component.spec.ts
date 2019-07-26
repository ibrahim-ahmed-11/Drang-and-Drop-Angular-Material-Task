import { TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { SearchComponent } from './search.component';
import { GetFromAPIService } from './../services/get-from-api.service';
import { DragulaService } from "ng2-dragula";
import { IterableDiffers } from '@angular/core';
import { MatExpansionPanelContent } from '@angular/material/expansion';

describe('Search component unit test', () => {
  let component : SearchComponent;
  let dragula : DragulaService;
  let httpMock: HttpTestingController;
  let service: GetFromAPIService;

  beforeEach(() => {
    dragula = new DragulaService();
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GetFromAPIService]
    });
    service = TestBed.get(GetFromAPIService);
    httpMock = TestBed.get(HttpTestingController);

    component = new SearchComponent(dragula, service);

    component.notFound = false;
    component.isEmpty = false;
  });

  it('Try to get the result with no input data', () => {
    component.getResult();
    expect(component.isEmpty).toBe(true);
  });

});