import angular from "angular";
import ngAria from "angular-aria";
import ngMaterial from "angular-material";
import template from "./button-more.html";

import { popupModule } from "../popup/popup";

export const buttonMoreModule = angular
  .module("buttonMore", [ngMaterial, ngAria, popupModule])
  .component("buttonMore", {
    template,
    bindings: {
      position: "@",
      editItemClick: "&",
      deleteItemClick: "&"
    }
  }).name;
