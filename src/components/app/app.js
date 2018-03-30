import angular from "angular";
import template from "./app.html";

import ngMaterial from "angular-material";

import { transactionDialogModule } from "../transaction-dialog/transaction-dialog";

export class AppController {
  constructor() {
    this.transactionDialogShow = { show: false };
  }

  onAddTransactionClick(event) {
    this.transactionDialogShow = { show: true, event: event };
  }
}

export const appModule = angular
  .module("appModule", [ngMaterial, transactionDialogModule])
  .component("app", {
    template,
    controller: AppController
  }).name;
