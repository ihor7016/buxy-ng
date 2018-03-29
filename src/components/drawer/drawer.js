import angular from "angular";
import template from "./drawer.html";
export class DrawerController {
  constructor($mdSidenav) {
    this.$mdSidenav = $mdSidenav;
  }
  buildToggler(componentId) {
    this.$mdSidenav(componentId).toggle();
  }

  toggleLeft() {
    this.buildToggler("left");
  }

  toggleRight() {
    this.buildToggler("right");
  }
}

export const drawerModule = angular
  .module("drawer", ["ngMaterial"])
  .component("drawer", {
    controller: DrawerController,
    template
  }).name;
