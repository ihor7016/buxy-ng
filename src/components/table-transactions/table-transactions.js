import angular from "angular";
import uiGrid from "angular-ui-grid";
import angularAnimate from "angular-animate";

import template from "./table-transactions.html";

export class GridController {
  constructor($scope) {
    this.scope = $scope;
    this.scope.gridOptions = {
      enableHorizontalScrollbar: 0,
      enableVerticalScrollbar: 0,
      enableColumnResizing: true,
      enableSorting: true,
      columnDef: [
        { name: "date" },
        { name: "amount" },
        { name: "description" },
        { name: "tag" },
        { name: "account" }
      ]
    };
    this.scope.gridOptions.data = [
      {
        date: "01.03.2018",
        amount: "-300 UAH",
        description: "soccer playing",
        tag: "hobby",
        account: "PrivatBank debitcard"
      },
      {
        date: "17.03.2018",
        amount: "+1500 UAH",
        description: "%% deposit",
        tag: "Bank's services",
        account: "PravexBank"
      },
      {
        date: "05.04.2018",
        amount: "-500 UAH",
        description: "fishing",
        tag: "hobby",
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
