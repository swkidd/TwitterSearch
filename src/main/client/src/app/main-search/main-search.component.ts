import { Component, OnInit } from '@angular/core';
import { SearchService } from '../service/search.service';
import { Query } from '../model/query.model';
import { QueryResponse} from '../model/queryresponse.model';
import { FormControl, FormGroup } from "@angular/forms";
import { DecimalPipe } from "@angular/common";

@Component({
  selector: 'app-main-search',
  templateUrl: './main-search.component.html',
  styleUrls: ['./main-search.component.scss']
})

export class MainSearchComponent implements OnInit {

  public searchResponse: QueryResponse = null;
  public lastTweetId: string = null;
  public prevTweetIds: string[] = [];
  public responseEmpty: boolean;

  public location:string;
  public queryGroup = new FormGroup({
    queryInput: new FormControl("potato"),
    countInput: new FormControl("10"),
    geocodeInput: new FormControl(""),
    radiusInput: new FormControl("50"),
  })

  constructor(private searchSvc: SearchService, private decimalPipe: DecimalPipe) {
    this.getLocation();
  }

  private stringAdd(addend: string, augend: number): string {
    if (addend.length < 15) {
      return (parseInt(addend) + augend).toString();
    }
    let addendLen = addend.length;
    let augendLen = augend.toString().length;
    return addend.substr(0, addendLen - augendLen - 2) + (parseInt(addend.substr(addendLen - augendLen - 2)) + augend);
  }

  public getLocation() {
    return navigator.geolocation.getCurrentPosition(pos => {
        this.location = this.decimalPipe.transform(pos.coords.latitude, ".2-2") + "," + this.decimalPipe.transform(pos.coords.longitude, ".2-2");
        this.queryGroup.controls['geocodeInput'].setValue(this.location);
      }
    )
  }

  public openTweet(id: string) {
    window.open("https://twitter.com/statuses/" + id);
  }

  public nextPage() {
    this.prevTweetIds.push(this.searchResponse.statuses[0].id_str);
    let queryRequest: Query = {
      query: this.queryGroup.controls['queryInput'].value,
      count: this.queryGroup.controls['countInput'].value,
      geocode: this.queryGroup.controls['geocodeInput'].value + "," + this.queryGroup.controls['radiusInput'].value + "mi",
      max_id: this.stringAdd(this.lastTweetId, -1),
    };
    this.searchSvc.search(queryRequest).toPromise().then(response => {
      this.searchResponse = response.valueOf() as QueryResponse;
      this.responseEmpty = this.searchResponse.statuses.length == 0;
      if (!this.responseEmpty) {
        this.lastTweetId = this.searchResponse.statuses[this.searchResponse.statuses.length - 1].id_str;
      }
    });
  }

  public prevPage() {
    if (this.prevTweetIds.length == 0) { return; }
    let queryRequest: Query = {
      query: this.queryGroup.controls['queryInput'].value,
      count: this.queryGroup.controls['countInput'].value,
      geocode: this.queryGroup.controls['geocodeInput'].value + "," + this.queryGroup.controls['radiusInput'].value + "mi",
      since_id: this.stringAdd(this.lastTweetId, 1),
      max_id: this.prevTweetIds.pop(),
    };
    this.searchSvc.search(queryRequest).toPromise().then(response => {
      this.searchResponse = response.valueOf() as QueryResponse;
      this.responseEmpty = this.searchResponse.statuses.length == 0;
      if (!this.responseEmpty) {
        this.lastTweetId = this.searchResponse.statuses[this.searchResponse.statuses.length - 1].id_str;
      }
    });

  }

  public getTweets() {
    let queryRequest: Query = {
      query: this.queryGroup.controls['queryInput'].value,
      count: this.queryGroup.controls['countInput'].value,
      geocode: this.queryGroup.controls['geocodeInput'].value + "," + this.queryGroup.controls['radiusInput'].value + "mi",
    };
    this.searchSvc.search(queryRequest).toPromise().then(response => {
      this.searchResponse = response.valueOf() as QueryResponse;
      this.responseEmpty = this.searchResponse.statuses.length == 0;
      if (!this.responseEmpty) {
        this.lastTweetId = this.searchResponse.statuses[this.searchResponse.statuses.length - 1].id_str;
      }
    });
  }

  ngOnInit() {
  }
}
