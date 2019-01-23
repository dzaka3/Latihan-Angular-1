import { Component, OnInit } from '@angular/core';
import { Perpus } from "./perpustakaan.model";

@Component({
  selector: 'app-perpustakaan',
  templateUrl: './perpustakaan.component.html',
  styleUrls: ['./perpustakaan.component.css']
})
export class PerpustakaanComponent implements OnInit {
  tambahList: Perpus[] = [];
  hapusList : Perpus = new Perpus();
  constructor() { }

  ngOnInit() {
  }

  onDataAdded(dataInfo: Perpus) {
    console.log(dataInfo);
    this.tambahList.push(dataInfo);
  }

  onDataDelete(dataInfo: Perpus) {
    console.log(dataInfo);
    this.hapusList = dataInfo;
  }
}
