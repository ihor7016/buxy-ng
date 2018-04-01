import angular from "angular";
import "angular-animate";
import "angular-aria";
import "angular-material";
import template from "./popup.html";
class PopupController {
  announceClick(index) {
    $mdDialog.show(
      $mdDialog
        .alert()
        .title("You clicked!")
        .textContent("You clicked the menu item at index " + index)
        .ok("Nice")
    );
  }
}
export const popupModule = angular
  .module("popup", ["ngMaterial"])
  .component("popup", {
    template,
    controller: PopupController
  }).name;
