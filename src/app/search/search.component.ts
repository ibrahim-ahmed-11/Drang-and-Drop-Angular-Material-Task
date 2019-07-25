import { GetFromAPIService } from './../services/get-from-api.service';
import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  private notFound: boolean;
  private isEmpty: boolean;
  resultSet: any;
  inputString: string;

  constructor(private service: GetFromAPIService) { }

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

  drop(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.resultSet, event.previousIndex, event.currentIndex);
  }

}
