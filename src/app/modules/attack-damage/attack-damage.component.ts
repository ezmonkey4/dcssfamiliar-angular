import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { SelectedWeaponService } from '../../core/services/selected-weapon.service'
import { WeaponListService } from '../../core/services/weapon-list.service'
import { ProfileService } from '../../core/services/profile.service'
import { SkillsService } from '../../core/services/skills.service'
import { ShareUrlService } from 'src/app/core/services/share-url.service';




@Component({
  selector: 'attack-damage',
  templateUrl: "./attack-damage.component.html",
  styles: ['mat-grid-tile { background: lightblue; }']
})
export class AttackDamageComponent implements OnInit{

  constructor(
    private route: ActivatedRoute,

    private skillsService: SkillsService,
    private selectedWeaponService: SelectedWeaponService,
    private weaponListService: WeaponListService,
    private profileService: ProfileService,
    private router: Router,
    private shareUrlService: ShareUrlService,

    ) {}
  ngOnInit() {
    if (this.route.snapshot.params.hasOwnProperty("profile")) {
       var profile_hash  =this.route.snapshot.params.profile
       var name_hash  =this.route.snapshot.params.name
       var species_hash  =this.route.snapshot.params.species
       var skills_hash  =this.route.snapshot.params.skills
       var wl_hash  =this.route.snapshot.params.wl
       var sw_hash  =this.route.snapshot.params.sw

       //var profile_hash = this.shareUrlService.convertLetterToNumber(profile)

       this.profileService.updateProfile( this.shareUrlService.recreateProfile(profile_hash, name_hash, species_hash))
       this.skillsService.updateSkills( this.shareUrlService.recreateSkills(skills_hash))
       this.weaponListService.updateWeaponList( this.shareUrlService.recreateWeaponList(wl_hash))
       this.selectedWeaponService.selectWeapon( this.shareUrlService.recreateSelectedWeapon(sw_hash))
}



      
  };

}
