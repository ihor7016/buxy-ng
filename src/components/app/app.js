import angular from "angular";
import template from "./app.html";

import ngMaterial from "angular-material";
import ngAnimate from "angular-animate";
import ngAria from "angular-aria";

import { transactionDialogModule } from "../transaction-dialog/transaction-dialog";

export class AppController {
  constructor() {
    this.transactionDialogOpen = { isOpen: false };
  }
  handleAddTransactionClick(event) {
    this.transactionDialogOpen = { isOpen: true, openEvent: event };
  }
}

export const appModule = angular
  .module("appModule", [ngMaterial, ngAnimate, ngAria, transactionDialogModule])
  .component("app", {
    template,
    controller: AppController
  }).name;
