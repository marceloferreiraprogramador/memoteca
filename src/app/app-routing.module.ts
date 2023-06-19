import {NgModule} from '@angular/core'
import {RouterModule,Routes} from '@angular/router'
import { CriarPensamentoComponent } from './componentes/pensamentos/criar-pensamento/criar-pensamento.component';
import { ListarPensamentoComponent } from './componentes/pensamentos/listar-pensamento/listar-pensamento.component';
import { ExcluirPensamentoComponent } from './componentes/pensamentos/excluir-pensamento/excluir-pensamento.component';

const routes:Routes = [{
        path:'criarPensamento',
        component:CriarPensamentoComponent
    },
    {
        path:'listarPensamento',
        component:ListarPensamentoComponent
    },  
    {
        path:'',
        component:ListarPensamentoComponent,
        pathMatch:'full'
    },
    {
        path:'pensamentos/excluirPensamento/:id',
        component:ExcluirPensamentoComponent,
        pathMatch:'full'
    },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}