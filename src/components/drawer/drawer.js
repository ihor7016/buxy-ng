import angular from "angular";
import template from "./drawer.html";

export class DrawerController {
  constructor($mdSidenav) {
    this.$mdSidenav = $mdSidenav;
  }

  $onChanges(changes) {
    this.toggleLeft();
  }

  toggleLeft() {
    this.$mdSidenav("left").toggle();
  }
}
export const drawerModule = angular
  .module("drawer", ["ngMaterial"])
  .component("drawer", {
    controller: DrawerController,
    bindings: {
      drawerOpened: "<"
    },
    template
  }).name;
