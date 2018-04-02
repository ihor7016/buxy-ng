import angular from "angular";
import uiGrid from "angular-ui-grid";
import angularAnimate from "angular-animate";

import template from "./table-transactions.html";

export class GridController {
  constructor() {
    this.transactions = [
      {
        date: "01.03.2018",
        amount: "-300 UAH",
        description: "soccer playing",
        tags: "hobby",
        account: "PrivatBank debitcard"
      },
      {
        date: "17.03.2018",
        amount: "+1500 UAH",
        description: "%% deposit",
        tags: "Bank's services",
        account: "PravexBank"
      },
      {
        date: "05.04.2018",
        amount: "-500 UAH",
        description: "fishing",
        tags: "hobby",
        account: "cash"
      }
    ];
  }
}

export const tableTransactionsModule = angular
  .module("tableTransactions", ["ngAnimate", "ui.grid"])
  .component("tableTransactions", {
    controller: GridController,
    template
  }).name;
