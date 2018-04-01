import angular from "angular";
import template from "./tags.html";
import { buttonMoreModule } from "../button-more/button-more";
class TagsController {
  constructor() {
    this.tags = [
      {
        name: "tttt"
      },
      {
        name: "yyyy"
      },
      {
        name: "uuuu"
      }
    ];
  }

  tagsItemClick() {}
}
export const tagsModule = angular
  .module("tags", ["ngMaterial", buttonMoreModule])
  .component("tags", {
    template,
    controller: TagsController
  }).name;
