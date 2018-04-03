import angular from "angular";
import ngAnimate from "angular-animate";
import ngAria from "angular-aria";
import ngMaterial from "angular-material";
import template from "./tags.html";
import { buttonMoreModule } from "../button-more/button-more";

class TagsController {
  constructor() {
    this.tags = ["tag1", "tag2", "tag3"];
  }
  handleAddTagClick() {
    console.log("handleAddTagClick");
  }
}

export const tagsModule = angular
  .module("tags", [ngMaterial, ngAria, ngAnimate, buttonMoreModule])
  .component("tags", {
    template,
    controller: TagsController
  }).name;
