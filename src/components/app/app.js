import angular from "angular";
import template from "./app.html";

import ngMaterial from "angular-material";

import { tagDialogModule } from "../tag-dialog/tag-dialog";

export class AppController {
  handleAddTagClick(event) {
    this.isTagDialogOpen = true;
    this.tagDialogOpenEvent = event;
  }

  handleTagDialogSubmit(data) {
    console.log(data);
    this.isTagDialogOpen = false;
  }

  handleTagDialogClose() {
    this.isTagDialogOpen = false;
  }
}

export const appModule = angular
  .module("appModule", [ngMaterial, tagDialogModule])
  .component("app", {
    template,
    controller: AppController
  }).name;
