import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ColorcrayontipService } from './services/colorcrayontip.service';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { ViewRegistrationComponent } from './components/view-registration/view-registration.component';
import { CallbackComponent } from './components/callback/callback.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth.guard';
import { RegisterStudentComponent } from './components/register-student/register-student.component';
import { ViewPaperComponent } from './components/view-paper/view-paper.component';
import { AnalyzePaperComponent } from './components/analyze-paper/analyze-paper.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NameTheQuizFormComponent } from './components/name-the-quiz-form/name-the-quiz-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HomeComponent,
    ViewRegistrationComponent,
    CallbackComponent,
    RegisterStudentComponent,
    ViewPaperComponent,
    AnalyzePaperComponent,
    NameTheQuizFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [ColorcrayontipService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
