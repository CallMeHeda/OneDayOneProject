import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext';
import { FileUploadModule } from 'primeng/fileupload';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { FieldsetModule } from 'primeng/fieldset';

import { AppComponent } from './app.component';
import { AddFunFactsComponent } from './components/add-fun-facts/add-fun-facts.component';

@NgModule({
  declarations: [AppComponent, AddFunFactsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    InputTextModule,
    FileUploadModule,
    HttpClientModule,
    ButtonModule,
    RippleModule,
    FieldsetModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
