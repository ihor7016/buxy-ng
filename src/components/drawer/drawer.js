import angular from "angular";
import ngAnimate from "angular-animate";
import ngAria from "angular-aria";
import ngMaterial from "angular-material";
import template from "./drawer.html";
import { accountsModule } from "../accounts/accounts";
import { tagsModule } from "../tags/tags";

export class DrawerController {
  constructor($mdSidenav) {
    this.$mdSidenav = $mdSidenav;
  }
  handleAccountClick(event) {
    console.log("handleAccountClick");
  }

  addTagClick(event) {
    console.log("addTagClick");
  }
}

export const drawerModule = angular
  .module("drawer", [ngMaterial, ngAria, ngAnimate, accountsModule, tagsModule])
  .component("drawer", {
    controller: DrawerController,
    bindings: {
      isDrawerOpened: "<"
    },
    template
  }).name;
