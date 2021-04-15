import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ListComponent} from './list/list.component';
import { MyFirstComponentComponent } from './my-first-component/my-first-component.component';
import { MyTestDirectiveDirective } from './my-test-directive.directive';
import { MyTestPipePipe } from './my-test-pipe.pipe';


const routes: Routes = [
  {path:'', component : HomeComponent},
  {path:'list', component : ListComponent},
  {path:'myfirst', component : MyFirstComponentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
   declarations: [	
    MyTestDirectiveDirective,
      MyTestPipePipe
   ]
})
export class AppRoutingModule { }
