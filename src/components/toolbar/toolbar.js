import angular from "angular";
import "angular-animate";
import "angular-aria";
import ngMaterial from "angular-material";
import template from "./toolbar.html";

class ToolbarController {
  handleMenuClick() {
    this.onMenuClick();
  }

  handleAboutClick() {
    console.log();
  }
}

export const toolbarModule = angular
  .module("toolbar", [ngMaterial])
  .component("toolbar", {
    template,
    controller: ToolbarController,
    bindings: {
      onMenuClick: "&"
    }
  }).name;
