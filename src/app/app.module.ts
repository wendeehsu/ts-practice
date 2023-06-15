import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PokemonBaseModule } from './pokemon-base/pokemon-base.module';
import { ChartComponent } from './chart/chart.component';
import { NgChartsModule } from 'ng2-charts';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    FileUploadComponent,
    HomeComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    PokemonBaseModule,
    NgChartsModule,
    NgxDropzoneModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
