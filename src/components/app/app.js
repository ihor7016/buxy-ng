import template from "./app.html";

import "angular-animate";
import "angular-aria";
import "angular-material";

import { transactionDialogModule } from "../transaction-dialog/transaction-dialog";

export class AppController {
  // constructor() {
  //   this.self = this;
  // }
  // onAddButtonClick() {
  //   this.self.appApi.showDialog();
  // }
}

export const appModule = angular
  .module("appModule", ["ngMaterial", transactionDialogModule])
  .component("app", {
    template,
    controller: AppController,
    bindings: {}
  }).name;
