import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { WordComponent } from './word/word.component';
import { BookComponent } from './book/book.component';
import { UserFormComponent } from './user-form/user-form.component';
import { NgIFComponent } from './ng-if/ng-if.component';
import { StructuralDirectiveComponent } from './structural-directive/structural-directive.component';
import { StructuralDirectiveObjectComponent } from './structural-directive-object/structural-directive-object.component';
import { PersonComponent } from './person/person.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    WordComponent,
    BookComponent,
    UserFormComponent,
    NgIFComponent,
    StructuralDirectiveComponent,
    StructuralDirectiveObjectComponent,
    PersonComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
