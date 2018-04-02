import angular from "angular";
import "angular-animate";
import "angular-aria";
import "angular-material";
import template from "./drawer.html";
import { accountsModule } from "../accounts/accounts";
import { tagsModule } from "../tags/tags";

export class DrawerController {
  constructor($mdSidenav) {
    this.$mdSidenav = $mdSidenav;
    this.isOpened = false;
  }
  handleAccountClick(event) {
    console.log();
  }

  addTagClick(event) {
    console.log();
  }

  $onChanges(changes) {
    this.toggleLeft();
  }

  toggleLeft() {
    this.isOpened = !this.isOpened;
  }
}

export const drawerModule = angular
  .module("drawer", ["ngMaterial", accountsModule, tagsModule])
  .component("drawer", {
    controller: DrawerController,
    bindings: {
      isDrawerOpened: "<"
    },
    template
  }).name;
