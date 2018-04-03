import angular from "angular";
import ngAnimate from "angular-animate";
import ngAria from "angular-aria";
import ngMaterial from "angular-material";
import template from "./toolbar.html";

class ToolbarController {
  handleAboutClick() {
    console.log("handleAboutClick");
  }
}

export const toolbarModule = angular
  .module("toolbar", [ngMaterial, ngAria, ngAnimate])
  .component("toolbar", {
    template,
    controller: ToolbarController,
    bindings: {
      onMenuClick: "&"
    }
  }).name;
