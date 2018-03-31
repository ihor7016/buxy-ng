import angular from "angular";
import template from "./table-transactions.html";

export class GridController {
  constructor() {
    this.transactions = [
      {
        date: "01.03.2018",
        amount: "-300 UAH",
        description: "soccer playing",
        tags: hobby,
        account: PrivatBank,
        debitcard
      },
      {
        date: "17.03.2018",
        amount: "+1500 UAH",
        description: "%% deposit",
        tags: "Bank's services",
        account: PravexBank
      },
      {
        date: "05.04.2018",
        amount: "-500 UAH",
        description: "fishing",
        tags: hobby,
        account: cash
      }
    ];
  }
}

export const tableTransactionModule = angular
  .module("tableTransaction", [])
  .component("tableTransaction", {
    controller: GridController,
    template
  }).name;
