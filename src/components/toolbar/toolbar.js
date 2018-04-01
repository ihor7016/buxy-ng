import angular from "angular";
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
