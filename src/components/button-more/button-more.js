import angular from "angular";
import "angular-animate";
import "angular-aria";
import "angular-material";
import template from "./button-more.html";

class ButtonMoreController {}

export const buttonMoreModule = angular
  .module("buttonMore", ["ngMaterial"])
  .component("buttonMore", {
    template,
    controller: ButtonMoreController
  }).name;
