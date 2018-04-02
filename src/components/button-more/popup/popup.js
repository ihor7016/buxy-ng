import angular from "angular";
import "angular-animate";
import "angular-aria";
import "angular-material";
import template from "./popup.html";

export const popupModule = angular
  .module("popup", ["ngMaterial"])
  .component("popup", {
    template
  }).name;
