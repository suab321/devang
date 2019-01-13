import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule,routingcomponent} from './app-routing.module';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { PrefooterComponent } from './prefooter/prefooter.component';
import { HeaderComponent } from './header/header.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainHeader2Component } from './main-header2/main-header2.component';
import { StepIntegrationComponent } from './step-integration/step-integration.component';
import { InvitefriendsComponent } from './invitefriends/invitefriends.component';
import { FormstateSharingstateComponent } from './formstate-sharingstate/formstate-sharingstate.component';
import { RforminviteComponent } from './rforminvite/rforminvite.component';
import { WidgetComponent } from './widget/widget.component';
import { RshareinviteComponent } from './rshareinvite/rshareinvite.component';
import { InfoComponent } from './info/info.component';
import { StepintegrationtabComponent } from './stepintegrationtab/stepintegrationtab.component';
import { PrevnextComponent } from './prevnext/prevnext.component';
import { RewardcComponent } from './rewardc/rewardc.component';
import { NoticComponent } from './notic/notic.component';
import { NotificationComponent } from './notification/notification.component';
import { ForminviteWihIconComponent } from './forminvite-wih-icon/forminvite-wih-icon.component';
import { InAppRleftComponent } from './in-app-rleft/in-app-rleft.component';
import { InAppRrightComponent } from './in-app-rright/in-app-rright.component';
import { ReferalComponent } from './referal/referal.component';
import { ConfirmemailComponent } from './confirmemail/confirmemail.component';
import { MainconfirmemailComponent } from './mainconfirmemail/mainconfirmemail.component';
import { RightconfirmemailComponent } from './rightconfirmemail/rightconfirmemail.component';
import { ProductsComponent } from './products/products.component';
import { LoggedheaderComponent } from './loggedheader/loggedheader.component';
import { FormwidgetComponent } from './formwidget/formwidget.component';
import { RewardwidgetComponent } from './rewardwidget/rewardwidget.component';
import { InapprefearlwidgetComponent } from './inapprefearlwidget/inapprefearlwidget.component';
import { FormwidgetopenComponent } from './formwidgetopen/formwidgetopen.component';
import { RewardcomponentopenComponent } from './rewardcomponentopen/rewardcomponentopen.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { MilestonereferalComponent } from './milestonereferal/milestonereferal.component';
import { HowitworksComponent } from './howitworks/howitworks.component';
import { ReferfriendComponent } from './referfriend/referfriend.component';
import { EcommercereferalComponent } from './ecommercereferal/ecommercereferal.component';
import { InvitefriendsviafacebookComponent } from './invitefriendsviafacebook/invitefriendsviafacebook.component';
import { FriendcommercemilestoneComponent } from './friendcommercemilestone/friendcommercemilestone.component';




@NgModule({
  declarations: [
    AppComponent,
    routingcomponent,
    FooterComponent,
    PrefooterComponent,
    HeaderComponent,
    MainHeaderComponent,
    MainHeader2Component,
    StepIntegrationComponent,
    InvitefriendsComponent,
    FormstateSharingstateComponent,
    RforminviteComponent,
    WidgetComponent,
    RshareinviteComponent,
    InfoComponent,
    StepintegrationtabComponent,
    PrevnextComponent,
    RewardcComponent,
    NoticComponent,
    NotificationComponent,
    ForminviteWihIconComponent,
    InAppRleftComponent,
    InAppRrightComponent,
    ReferalComponent,
    ConfirmemailComponent,
    MainconfirmemailComponent,
    RightconfirmemailComponent,
    ProductsComponent,
    LoggedheaderComponent,
    FormwidgetComponent,
    RewardwidgetComponent,
    InapprefearlwidgetComponent,
    FormwidgetopenComponent,
    RewardcomponentopenComponent,
    TestimonialComponent,
    MilestonereferalComponent,
    HowitworksComponent,
    ReferfriendComponent,
    EcommercereferalComponent,
    InvitefriendsviafacebookComponent,
    FriendcommercemilestoneComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
