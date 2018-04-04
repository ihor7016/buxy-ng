import angular from "angular";
import ngAnimate from "angular-animate";
import ngAria from "angular-aria";
import ngMaterial from "angular-material";
import template from "./toolbar.html";

import { aboutDialogModule } from "../about-dialog/about-dialog";

class ToolbarController {
  handleAboutClick(event) {
    this.isAboutDialogOpen = true;
    this.aboutDialogOpenEvent = event;
  }

  handleAboutDialogClose() {
    this.isAboutDialogOpen = false;
  }
}

export const toolbarModule = angular
  .module("toolbar", [ngMaterial, ngAria, ngAnimate, aboutDialogModule])
  .component("toolbar", {
    template,
    controller: ToolbarController,
    bindings: {
      onMenuClick: "&"
    }
  }).name;
