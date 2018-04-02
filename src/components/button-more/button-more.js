import angular from "angular";
import "angular-animate";
import "angular-aria";
import "angular-material";
import template from "./button-more.html";
import { popupModule } from "./popup/popup";
class ButtonMoreController {
  // constructor(){
  //   this.popupOpened  = false;
  // }
  // open(event){
  //   this.popupOpened = !this.popupOpened;
  // }
}
export const buttonMoreModule = angular
  .module("buttonMore", ["ngMaterial", popupModule])
  .component("buttonMore", {
    template,
    controller: ButtonMoreController
  }).name;
