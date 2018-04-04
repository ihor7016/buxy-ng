import angular from "angular";
import ngAnimate from "angular-animate";
import ngAria from "angular-aria";
import ngMaterial from "angular-material";
import template from "./tags.html";

import { buttonMoreModule } from "../button-more/button-more";
import { tagDialogModule } from "../tag-dialog/tag-dialog";

class TagsController {
  constructor() {
    this.tags = ["tag1", "tag2", "tag3"];
  }

  handleAddTagClick(event) {
    this.isTagDialogOpen = true;
    this.tagDialogOpenEvent = event;
  }

  handleClickEditTag() {
    console.log("handleClickEditTag");
  }
  handleClickDeleteTag() {
    console.log("handleClickDeleteTag");
  }

  handleTagDialogSubmit(data) {
    console.log(data);
    this.isTagDialogOpen = false;
  }

  handleTagDialogClose() {
    this.isTagDialogOpen = false;
  }
}

export const tagsModule = angular
  .module("tags", [
    ngMaterial,
    ngAria,
    ngAnimate,
    buttonMoreModule,
    tagDialogModule
  ])
  .component("tags", {
    template,
    controller: TagsController
  }).name;
