import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HoverHighlightDirective } from './hover-highlight.directive';
import { PerpustakaanComponent } from './perpustakaan/perpustakaan.component';
import { TambahComponent } from './perpustakaan/tambah/tambah.component';
import { HapusComponent } from './perpustakaan/hapus/hapus.component';

@NgModule({
  declarations: [
    AppComponent,
    HoverHighlightDirective,
    PerpustakaanComponent,
    TambahComponent,
    HapusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
