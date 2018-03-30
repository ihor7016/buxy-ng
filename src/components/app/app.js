import angular from "angular";
import template from "./app.html";

import ngMaterial from "angular-material";

import { accountDialogModule } from "../account-dialog/account-dialog";

export class AppController {
  constructor() {
    this.accountDialogShow;
  }

  onAddAccountClick(event) {
    this.accountDialogShow = { event: event };
  }
}

export const appModule = angular
  .module("appModule", [ngMaterial, accountDialogModule])
  .component("app", {
    template,
    controller: AppController
  }).name;
