import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MailchimpComponent } from './mailchimp/mailchimp.component';
import { HoWorksComponent } from './ho-works/ho-works.component';
import { IntegrationComponent } from './integration/integration.component';
import { IndexComponent } from './index/index.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StepIntegrationComponent } from './step-integration/step-integration.component';
import { InvitefriendsComponent } from './invitefriends/invitefriends.component';
import { FormstateSharingstateComponent } from './formstate-sharingstate/formstate-sharingstate.component';
import { RforminviteComponent } from './rforminvite/rforminvite.component';
import { WidgetComponent } from './widget/widget.component';
import { InfoComponent } from './info/info.component';
import { PrevnextComponent } from './prevnext/prevnext.component';
import { RewardcComponent } from './rewardc/rewardc.component';
import { NoticComponent } from './notic/notic.component';
import { ForminviteWihIconComponent } from './forminvite-wih-icon/forminvite-wih-icon.component';
import { InAppRleftComponent } from './in-app-rleft/in-app-rleft.component';
import { InAppRrightComponent } from './in-app-rright/in-app-rright.component';
import { ReferalComponent } from './referal/referal.component';
import { ConfirmemailComponent } from './confirmemail/confirmemail.component';
import { MainconfirmemailComponent } from './mainconfirmemail/mainconfirmemail.component';
import { RightconfirmemailComponent } from './rightconfirmemail/rightconfirmemail.component';
import { ProductsComponent } from './products/products.component';
import {LoggedheaderComponent} from './loggedheader/loggedheader.component';
import { FormwidgetComponent } from './formwidget/formwidget.component';
import { RewardwidgetComponent } from './rewardwidget/rewardwidget.component';
import { InapprefearlwidgetComponent } from './inapprefearlwidget/inapprefearlwidget.component';
import { FormwidgetopenComponent } from './formwidgetopen/formwidgetopen.component';
import { RewardcomponentopenComponent } from './rewardcomponentopen/rewardcomponentopen.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { MilestonereferalComponent } from './milestonereferal/milestonereferal.component';
import { ReferfriendComponent } from './referfriend/referfriend.component';
import { EcommercereferalComponent } from './ecommercereferal/ecommercereferal.component';
import { InvitefriendsviafacebookComponent } from './invitefriendsviafacebook/invitefriendsviafacebook.component';
import { FriendcommercemilestoneComponent } from './friendcommercemilestone/friendcommercemilestone.component';

const routes: Routes = [
    {path:'',component:IndexComponent},
    {path:'stepintegration',component:StepIntegrationComponent},
    {path:'signin',component:LoginComponent},
    {path:'signup',component:RegisterComponent},
    {path:'mailchimp',component:MailchimpComponent},
    {path:'howitworks',component:HoWorksComponent},
    {path:'ourintegration',component:IntegrationComponent},
    {path:'inmilestonereferaldex',component:IndexComponent},
    {path:'invitefriends',component:InvitefriendsComponent},
    {path:'testing',component:FriendcommercemilestoneComponent},
    {path:'referalwidget',component:ReferalComponent},
    {path:'formwidgetopen',component:FormwidgetopenComponent},
    {path:"rewardcomponentopen",component:RewardcomponentopenComponent},
    {path:"milestonereferal",component:MilestonereferalComponent},
    {path:"friendreferal",component:ReferfriendComponent},
    {path:"ecommercereferal",component:EcommercereferalComponent},
    {path:"**",component:PageNotFoundComponent}
]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  export const routingcomponent=[LoginComponent,RegisterComponent,MailchimpComponent,MailchimpComponent,
HoWorksComponent,IntegrationComponent,IndexComponent,PageNotFoundComponent]
