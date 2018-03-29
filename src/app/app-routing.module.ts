import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmigosComponent } from './amigos/amigos.component';
import { ComprasComponent } from './compras/compras.component';
import { InicioComponent } from './inicio/inicio.component';


const routes: Routes = [
{ path: '', redirectTo: '/compra', pathMatch: 'full' },
{ path: 'amigos', component: AmigosComponent },
{ path: 'compras', component: ComprasComponent }

];

@NgModule({
imports: [ RouterModule.forRoot(routes) ],
exports: [ RouterModule ]
})

export class AppRoutingModule {}