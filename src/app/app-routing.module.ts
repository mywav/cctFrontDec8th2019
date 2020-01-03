import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { ViewRegistrationComponent } from './components/view-registration/view-registration.component';
import {CallbackComponent } from './components/callback/callback.component';
import { AuthGuard } from './services/auth.guard';
import { RegisterStudentComponent } from './components/register-student/register-student.component';
import { ViewPaperComponent } from './components/view-paper/view-paper.component';
import { AnalyzePaperComponent } from './components/analyze-paper/analyze-paper.component';
import { NameTheQuizFormComponent } from './components/name-the-quiz-form/name-the-quiz-form.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'viewPaper',
    component: ViewPaperComponent
  },
  {
    path: 'registerStudent',
    component: RegisterStudentComponent
  },
  {
    path: 'analyzePaper',
    component: AnalyzePaperComponent
  },
  {
    path: 'admin/view/:id',
    component: ViewRegistrationComponent,
    canActivate: [AuthGuard]
  },  
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'callback',
    component: CallbackComponent
  },
  {
    path: 'name-the-quiz-form',
    component: NameTheQuizFormComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
