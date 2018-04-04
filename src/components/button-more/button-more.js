import angular from "angular";
import ngAnimate from "angular-animate";
import ngAria from "angular-aria";
import ngMaterial from "angular-material";
import template from "./button-more.html";

import { popupModule } from "./popup/popup";

export const buttonMoreModule = angular
  .module("buttonMore", ["ngMaterial", popupModule])
  .component("buttonMore", {
    template,
    bindings: {
      position: "@",
      editItemClick: "&",
      deleteItemClick: "&"
    }
  }).name;
