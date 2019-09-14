import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  posts$: Object;
  constructor(private api: ApiService) {

  }

  ngOnInit() {
    this.api.getData().subscribe(
      api => this.posts$ = api
    );
  }
  ngOnDestroy() {
    console.log("Home Component is destroyed!");
  }
}
