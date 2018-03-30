import angular from "angular";
import template from "./toolbar.html";
class ToolbarController {
  handleMenuClick() {
    this.onMenuClick({ tr: console.log("jhh") });
  }
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
