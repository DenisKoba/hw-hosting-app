import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { StudentPanelComponent } from './student-panel/student-panel.component';
import { TeacherPanelComponent } from './teacher-panel/teacher-panel.component';
import { CreateNewModalComponent } from './create-new-modal/create-new-modal.component';
import { UiButtonComponent } from './components/ui-button/ui-button.component';
import { UiSelectComponent } from './components/ui-select/ui-select.component';
import { UiInputComponent } from './components/ui-input/ui-input.component';
import { SheetComponent } from './sheet/sheet.component';
import { SheetRowComponent } from './sheet-row/sheet-row.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StudentPanelComponent,
    TeacherPanelComponent,
    CreateNewModalComponent,
    UiButtonComponent,
    UiSelectComponent,
    UiInputComponent,
    SheetComponent,
    SheetRowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
