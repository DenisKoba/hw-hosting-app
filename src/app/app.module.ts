import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule, StorageBucket } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { RouterModule, Routes } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';

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
import { StudentEditModalComponent } from './student-edit-modal/student-edit-modal.component';
import { AuthService } from '../services/auth.service';
import * as fromApp from '../store/app.reducer';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'student-panel', component: StudentPanelComponent },
  { path: 'teacher-panel', component: TeacherPanelComponent },
];


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
    StudentEditModalComponent,
  ],
  entryComponents: [CreateHomeworkComponent],
  imports: [
    MatSelectModule,
    BrowserModule,
    AppRoutingModule,
    NgxSmartModalModule.forRoot(),
    MaterialAngularSelectModule,
    FormsModule,
    StoreModule.forRoot(fromApp.AppReducer),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    BrowserAnimationsModule
  ],
  providers: [
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
