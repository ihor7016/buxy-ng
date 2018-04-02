import angular from "angular";
import template from "./app.html";

import { aboutDialogModule } from "../about-dialog/about-dialog";

export class AppController {
  constructor() {
    this.aboutDialogOpen;
  }

  onAboutBtnClick(event) {
    this.aboutDialogOpen = { event: event };
  }
}

export const appModule = angular
  .module("appModule", [aboutDialogModule])
  .component("app", {
    template,
    controller: AppController
  }).name;
