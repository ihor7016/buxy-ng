import angular from "angular";
import template from "./transactions.html";

import ngMaterial from "angular-material";
import ngAnimate from "angular-animate";
import ngAria from "angular-aria";

import { transactionDialogModule } from "../transaction-dialog/transaction-dialog";

export class TransactionsController {
  handleAddTransactionClick(event) {
    this.isTransactionDialogOpen = true;
    this.transactionDialogOpenEvent = event;
  }

  handleTransactionDialogSubmit(data) {
    console.log(data);
    this.isTransactionDialogOpen = false;
  }

  handleTransactionDialogClose() {
    this.isTransactionDialogOpen = false;
  }
}

export const transactionsModule = angular
  .module("transactionsModule", [
    ngMaterial,
    ngAnimate,
    ngAria,
    transactionDialogModule
  ])
  .component("transactions", {
    template,
    controller: TransactionsController
  }).name;
