import angular from "angular";
import "angular-animate";
import "angular-aria";
import "angular-material";
import template from "./toolbar.html";
class ToolbarController {
  handleMenuClick() {
    this.onMenuClick();
  }

  handleAboutClick() {}
}
export const toolbarModule = angular
  .module("toolbar", ["ngMaterial"])
  .component("toolbar", {
    template,
    controller: ToolbarController,
    bindings: {
      onMenuClick: "&"
    }
  }).name;
