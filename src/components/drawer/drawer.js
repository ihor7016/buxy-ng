import angular from "angular";
import template from "./drawer.html";
import { accountsModule } from "../accounts/accounts";

export class DrawerController {
  constructor($mdSidenav) {
    this.$mdSidenav = $mdSidenav;
    this.isOpened = false;
  }
  addAccountClick(event) {}

  $onChanges(changes) {
    this.toggleLeft();
  }

  toggleLeft() {
    this.isOpened = !this.isOpened;
  }
}
export const drawerModule = angular
  .module("drawer", ["ngMaterial", accountsModule])
  .component("drawer", {
    controller: DrawerController,
    bindings: {
      drawerOpened: "<"
    },
    template
  }).name;
