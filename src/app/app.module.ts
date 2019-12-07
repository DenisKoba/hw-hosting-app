import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule, StorageBucket } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { StudentPanelComponent } from './student-panel/student-panel.component';
import { TeacherPanelComponent } from './teacher-panel/teacher-panel.component';
import { UiButtonComponent } from './components/ui-button/ui-button.component';
import { UiSelectComponent } from './components/ui-select/ui-select.component';
import { UiInputComponent } from './components/ui-input/ui-input.component';
import { SheetComponent } from './sheet/sheet.component';
import { SheetRowComponent } from './sheet-row/sheet-row.component';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { CreateHomeworkComponent } from './create-homework/create-homework.component';
import { MaterialAngularSelectModule } from 'material-angular-select';
import { TeacherEditModalComponent } from './teacher-edit-modal/teacher-edit-modal.component';
import { StudentEditModalComponent } from './student-edit-modal/student-edit-modal.component';
import { AuthService } from '../services/auth.service';
import * as fromApp from '../store/app.reducer';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StudentPanelComponent,
    TeacherPanelComponent,
    UiButtonComponent,
    UiSelectComponent,
    UiInputComponent,
    SheetComponent,
    SheetRowComponent,
    CreateHomeworkComponent,
    TeacherEditModalComponent,
    StudentEditModalComponent,
  ],
  entryComponents: [CreateHomeworkComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSmartModalModule.forRoot(),
    MaterialAngularSelectModule,
    FormsModule,
    StoreModule.forRoot(fromApp.AppReducer),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule
  ],
  providers: [
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
