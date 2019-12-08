import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SelectedWeaponService {
  private weaponSource = new BehaviorSubject({"name":"quick blade"});
  weapon = this.weaponSource.asObservable();

  selectWeapon(weapon) {
    this.weaponSource.next(weapon);
  }

  constructor() { }
}