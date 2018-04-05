import angular from "angular";
import ngMaterial from "angular-material";
import template from "./popup.html";

export const popupModule = angular
  .module("popup", [ngMaterial])
  .component("popup", {
    template,
    bindings: {
      editItemClick: "&",
      deleteItemClick: "&"
    }
  }).name;
