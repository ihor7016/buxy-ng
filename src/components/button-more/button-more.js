import angular from "angular";
import template from "./button-more.html";
class ButtonMoreController {}
export const buttonMoreModule = angular
  .module("buttonMore", ["ngMaterial"])
  .component("buttonMore", {
    template,
    controller: ButtonMoreController
  }).name;
