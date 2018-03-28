import angular from "angular";
import template from "./todo-form.html";

export const todoFormModule = angular
  .module("todoForm", [])
  .component("todoForm", {
    template
  }).name;
