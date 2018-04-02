import angular from "angular";
import "angular-animate";
import "angular-aria";
import "angular-material";
import template from "./popup.html";
class PopupController {
  // constructor($mdMenu) {
  //   this.$mdMenu = $mdMenu;
  //   this.isOpened = false;
  // }
  // $onChanges(changes) {
  //   this.toggleLeft();
  // }
  //
  // toggleLeft() {
  //   this.isOpened = !this.isOpened;
  //   if (this.isOpened) {
  //     $mdMenu.open();
  //   }
  // }
}
export const popupModule = angular
  .module("popup", ["ngMaterial"])
  .component("popup", {
    bindings: {
      popupOpened: "<"
    },
    template,
    controller: PopupController
  }).name;
