import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { DetailComponent } from "./detail/detail.component";
import { ErrorComponent } from "./error/error.component";
import { AddCvComponent } from './CvTech/add-cv/add-cv.component';
import { CvComponent } from './CvTech/cv/cv.component';
import { DeleteComponent } from './CvTech/delete/delete.component';
import { ReadComponent } from './read/read.component';
import { UpdateCvComponent } from './CvTech/update-cv/update-cv.component';
const routes: Routes = [
  {path:'cv',children:[
        {path:'',component:CvComponent},
        {path:'delete/:id',component:DeleteComponent},
        {path:'add',component:AddCvComponent},
        {path:'updateCv/:id',component:UpdateCvComponent},
        // {path:'detail/:id',component:DetailComponent},
        {path:':id',component:DetailComponent},
    ]},
    {path:'',component:CvComponent},
    {path:'read',component:ReadComponent},
    {path:'login',component:LoginComponent},
    {path:'**',component:ErrorComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
