import { PhotoService } from './../photo/photo.service';
import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { Photo } from './../photo/photo';

@Component({
  selector: "ap-photo-list",
  templateUrl: "./photo-list.component.html",
  styleUrls: ["./photo-list.component.css"],
})
export class PhotoListComponent implements OnInit, OnDestroy {


  photos: Photo[] = [];
  filter: string = '';
  debounce: Subject<string> = new Subject<string>();
  hasMore: boolean = true;
  currentPage: number = 1;
  userName: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private photoService: PhotoService
    ) {}

  ngOnInit(): void {
    this.userName = this.activatedRoute.snapshot.params.userName;
    this.photos = this.activatedRoute.snapshot.data['photos'];
    this.debounce
    .pipe(debounceTime(300)) /* --> aplicando delay de 300 ms por meio do rxjs operators. */
    .subscribe(filter => this.filter = filter);
  }

  ngOnDestroy(): void {            /* passa unsubscribe justamente para desinscrever-se do debounce.. */
    this.debounce.unsubscribe();  /* Boa pratica utilizar OnDestroy para desalocar memoria */
  }

  load() {
    this.photoService
    .listFromUserPaginated(this.userName, ++this.currentPage)
    .subscribe(photos => {
      this.photos = this.photos.concat(photos);
      if(!photos.length) this.hasMore = false;
    });
  }

}
