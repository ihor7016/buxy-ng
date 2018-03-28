import angular from "angular";
import template from "./app.html";

export const appModule = angular.module("appModule", []).component("app", {
  template
}).name;
