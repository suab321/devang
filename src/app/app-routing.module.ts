import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MailchimpComponent } from './mailchimp/mailchimp.component';
import { HoWorksComponent } from './ho-works/ho-works.component';
import { IntegrationComponent } from './integration/integration.component';
import { IndexComponent } from './index/index.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
    {path:'',component:IndexComponent},
    {path:'signin',component:LoginComponent},
    {path:'signup',component:RegisterComponent},
    {path:'mailchimp',component:MailchimpComponent},
    {path:'howitworks',component:HoWorksComponent},
    {path:'integration',component:IntegrationComponent},
    {path:'index',component:IndexComponent},
    {path:"**",component:PageNotFoundComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  export const routingcomponent=[LoginComponent,RegisterComponent,MailchimpComponent,MailchimpComponent,
HoWorksComponent,IntegrationComponent,IndexComponent,PageNotFoundComponent]