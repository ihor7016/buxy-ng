import angular from "angular";
import ngAnimate from "angular-animate";
import ngAria from "angular-aria";
import ngMaterial from "angular-material";
import template from "./button-more.html";

class ButtonMoreController {}

export const buttonMoreModule = angular
  .module("buttonMore", [ngMaterial, ngAria, ngAnimate])
  .component("buttonMore", {
    template,
    controller: ButtonMoreController
  }).name;
