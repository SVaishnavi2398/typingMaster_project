import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResultComponent } from './result/result.component';
import { TypingpadComponent } from './typingpad/typingpad.component';

const routes: Routes = [
  {path:'typing', component:TypingpadComponent},
  {path:'', component:HomeComponent},
  {path:'result', component:ResultComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
