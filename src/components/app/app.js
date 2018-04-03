import angular from "angular";
import template from "./app.html";

import { aboutDialogModule } from "../about-dialog/about-dialog";

export class AppController {
  handleAboutBtnClick(event) {
    this.isAboutDialogOpen = true;
    this.aboutDialogOpenEvent = event;
  }

  handleAboutDialogClose() {
    this.isAboutDialogOpen = false;
  }
}

export const appModule = angular
  .module("appModule", [aboutDialogModule])
  .component("app", {
    template,
    controller: AppController
  }).name;
