export class InventoryFood {
  constructor(public item: string, public healthy: number, public hazard: number, public weight: number, public damage: number, public worth: number){}
}
export class InventoryMedic{
  constructor(public item: string, public heals: number, public weight: number, public damage: number, public worth: number){}
}
export class InventoryTools{
  constructor(public item: string, public weight: number, public damage: number, public worth: number){}
}
export class InventoryCoins{
  constructor(public item: string, public worth: number){}
}
export class InventoryWeapons{
  constructor(public item: string, public attack: number, public weight: number, public damage: number, public ammo: number, public worth: number ){}
}
export class InventoryAmmo{
  constructor(public item: string, public weight: number, public armorPiercing: number, public worth: number){}
}
