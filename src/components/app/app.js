import angular from "angular";
import template from "./app.html";

import ngMaterial from "angular-material";

import { transactionDialogModule } from "../transaction-dialog/transaction-dialog";

export class AppController {
  constructor() {
    this.transactionDialogShow;
  }

  onAddTransactionClick(event) {
    this.transactionDialogShow = { event: event };
  }
}

export const appModule = angular
  .module("appModule", [ngMaterial, transactionDialogModule])
  .component("app", {
    template,
    controller: AppController
  }).name;
