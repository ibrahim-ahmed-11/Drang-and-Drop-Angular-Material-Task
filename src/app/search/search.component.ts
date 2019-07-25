import { GetFromAPIService } from './../services/get-from-api.service';
import { Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  notFound: boolean;
  isEmpty: boolean;
  resultSet: any;
  inputString: string;


  public constructor(private dragulaService: DragulaService, private service: GetFromAPIService) {
    dragulaService.createGroup("resultsFromServer", {
      removeOnSpill: false
    });
  }

  ngOnInit() {
    this.notFound = false;
    this.isEmpty = false;
  }

  getResult() { 

    if (this.inputString) {

      this.isEmpty = false;
      this.service.getResults(this.inputString).subscribe(success => {

        this.notFound = false;

        if (Array.isArray(success["results"]))
          this.resultSet = success["results"];
        else
          this.resultSet = [success];

      }, (error: Response) => {
        this.notFound = true;
      });
    }
    else
      this.isEmpty = true;
  }

}
