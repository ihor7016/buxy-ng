import angular from "angular";
import template from "./todo-form.html";

export class TodoFormController {
  constructor() {
    this.value = "";
  }

  handleClick() {
    this.onTaskAdd({ task: this.value });
    this.value = "";
  }
}

export const todoFormModule = angular
  .module("todoForm", [])
  .component("todoForm", {
    controller: TodoFormController,
    template,
    bindings: {
      onTaskAdd: "&",
      numTasks: "<"
    }
  }).name;
