import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TutorialComponent } from './components/tutorial/tutorial.component';
import { PreguntasComponent } from './components/preguntas/preguntas.component';
import { RecursosComponent } from './components/recursos/recursos.component';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  { path: 'home', component: MainComponent },
  { path: 'preguntas', component: PreguntasComponent },
  { path: 'recursos', component: RecursosComponent },
  { path: 'tutorial', component: TutorialComponent },
  { path: '**', pathMatch: 'full', redirectTo:'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
