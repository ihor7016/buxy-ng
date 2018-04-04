import angular from "angular";
import ngMaterial from "angular-material";
import template from "./popup.html";

export class PopupController {
  constructor() {}
  handleItemClickEdit() {
    console.log("handleItemClickEdit");
  }
  handleItemClickDelete() {
    console.log("handleItemClickDelete");
  }
}

export const popupModule = angular
  .module("popup", [ngMaterial])
  .component("popup", {
    controller: PopupController,
    template
  }).name;
