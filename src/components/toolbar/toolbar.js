import angular from "angular";
import template from "./toolbar.html";

export const toolbarModule = angular
  .module("toolbar", ["ngMaterial"])
  .component("toolbar", {
    template,
    bindings: {
      onMenuClick: "&"
    }
  }).name;
