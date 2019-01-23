import {Component, EventEmitter, OnInit, Output, Input, ElementRef, ViewChild} from '@angular/core';
import {Perpus} from "../perpustakaan.model";

@Component({
  selector: 'app-tambah',
  templateUrl: './tambah.component.html',
  styleUrls: ['./tambah.component.css']
})
export class TambahComponent implements OnInit {
  @ViewChild('inputQuantity') inputQuantity: ElementRef;
  @Input() tambahList = Perpus;
  @Output() dataAdded = new EventEmitter<Perpus> ();

  inputInfo = new Perpus();
  constructor() { }

  ngOnInit() {
  }

  tambahData(inputIsbn: HTMLInputElement){
    console.log(this.inputInfo);
    console.log(inputIsbn.value);
    console.log(this.inputQuantity.nativeElement.value);
    this.dataAdded.emit(this.inputInfo);
    this.inputInfo = new Perpus();
  }
}
