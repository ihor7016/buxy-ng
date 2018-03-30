import angular from "angular";
import template from "./app.html";

// import ngAnimate from "angular-animate";
import ngMaterial from "angular-material";
// import ngAria from "angular-aria";

import { transactionDialogModule } from "../transaction-dialog/transaction-dialog";

export class AppController {
  constructor() {}
  onAddButtonClick() {
    this.myApi.showDialog();
  }
}

export const appModule = angular
  .module("appModule", [ngMaterial, transactionDialogModule])
  .component("app", {
    template,
    controller: AppController
  }).name;
