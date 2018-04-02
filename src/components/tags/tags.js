import angular from "angular";
import "angular-animate";
import "angular-aria";
import "angular-material";
import template from "./tags.html";
import { buttonMoreModule } from "../button-more/button-more";

class TagsController {
  constructor() {
    this.tags = ["tag1", "tag2", "tag3"];
  }

  handleItemClick() {}
}

export const tagsModule = angular
  .module("tags", ["ngMaterial", buttonMoreModule])
  .component("tags", {
    template,
    controller: TagsController
  }).name;
