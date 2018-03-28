import angular from "angular";
import template from "./todo-list.html";

export const todoListModule = angular
  .module("todoList", [])
  .component("todoList", {
    template,
    bindings: {
      todoItems: "<"
    }
  }).name;
