import angular from "angular";
import "angular-animate";
import "angular-aria";
import "angular-material";
import template from "./button-more.html";
import { popupModule } from "./popup/popup";

export const buttonMoreModule = angular
  .module("buttonMore", ["ngMaterial", popupModule])
  .component("buttonMore", {
    template
  }).name;
