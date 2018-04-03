import angular from "angular";
import template from "./app.html";

import ngMaterial from "angular-material";

import { accountDialogModule } from "../account-dialog/account-dialog";

export class AppController {
  handleAddAccountClick(event) {
    this.isAccountDialogOpen = true;
    this.accountDialogOpenEvent = event;
  }

  handleAccountDialogSubmit(data) {
    console.log(data);
    this.isAccountDialogOpen = false;
  }

  handleAccountDialogClose() {
    this.isAccountDialogOpen = false;
  }
}

export const appModule = angular
  .module("appModule", [ngMaterial, accountDialogModule])
  .component("app", {
    template,
    controller: AppController
  }).name;
