import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Attribute } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';



import {MaterialModule} from '../../shared/material.module';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//import { WeaponListComponent } from '../attack-damage/components/weapon-list/weapon-list.component';
//import { AttackDamageComponent } from '../attack-damage/attack-damage.component';
//import { WeaponDamageComponent } from '../attack-damage/components/weapon-damage/weapon-damage.component';
import { AttackDamageModule } from '../attack-damage/attack-damage.module';
import { SpellDamageModule } from '../spell-damage/spell-damage.module';
import { EvocationsModule } from '../evocations/evocations.module';
import { ProfileComponent } from '../profile/profile.component'
import { SkillsMenuComponent } from '../skills-menu/skills-menu.component'
import { InfoComponent } from '../info/info.component'
import { PasteCharacterComponent } from '../paste-character/paste-character.component'
import { LandUrlComponent } from '../land-url/land-url.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShareUrlButtonComponent } from '../share-url-button/share-url-button.component'
import { ChangelistComponent } from '../changelist/changelist.component'
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    //WeaponListComponent,
    //AttackDamageComponent,
    //WeaponDamageComponent,
    ProfileComponent,
    SkillsMenuComponent,
    PasteCharacterComponent,
    InfoComponent,
    LandUrlComponent,
    ShareUrlButtonComponent,
    ChangelistComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    AttackDamageModule,
    SpellDamageModule,
    NgbModule,
    EvocationsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
