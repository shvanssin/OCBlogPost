import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostListComponent } from './Components/post-list/post-list.component';
import { PostListItemComponent } from './Components/post-list-item/post-list-item.component';
import { FormsModule } from '@angular/forms';
import { PosPipe } from './Pipe/pos.pipe';
import { NegPipe } from './Pipe/neg.pipe';



@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostListItemComponent,
    PosPipe,
    NegPipe
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
