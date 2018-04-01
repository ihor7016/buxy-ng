import angular from "angular";
import "angular-animate";
import "angular-aria";
import "angular-material";
import template from "./button-more.html";
import { popupModule } from "../popup/popup";
class ButtonMoreController {}
export const buttonMoreModule = angular
  .module("buttonMore", popupModule, ["ngMaterial"])
  .component("buttonMore", {
    template,
    controller: ButtonMoreController
  }).name;
