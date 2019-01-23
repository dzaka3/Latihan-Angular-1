import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Perpus } from "../perpustakaan.model";

@Component({
  selector: 'app-hapus',
  templateUrl: './hapus.component.html',
  styleUrls: ['./hapus.component.css']
})
export class HapusComponent implements OnInit {
  @Output() dariChildKeParent: EventEmitter<Perpus> = new EventEmitter();
  @Input() perpusParent: Perpus[];
  @Input() perpusEditParent: Perpus[];
  constructor() { }

  ngOnInit() {
  }
  showname(idx: number) {
    this.dariChildKeParent.emit(this.perpusParent[idx]);
  }
}
