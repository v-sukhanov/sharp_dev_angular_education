import { NgModule } from '@angular/core';
import { RouterModule, Routes, provideRouter, withComponentInputBinding } from '@angular/router';
import { ParamsFromInputTestComponent } from './components/params-from-input-test/params-from-input-test.component';

const routes: Routes = [
  {
    path: 'params/:id',
    component: ParamsFromInputTestComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    provideRouter(routes, withComponentInputBinding())
  ]
})
export class AppRoutingModule { }
