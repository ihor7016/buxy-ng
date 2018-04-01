import angular from "angular";
import template from "./accounts.html";
class AccountsController {
  constructor() {
    this.accounts = [
      {
        name: "ssss",
        balance: 2222,
        type: "checking",
        currency: "UAH",
        id: "zbv873vg6cm"
      },
      {
        name: "ddd",
        balance: 111,
        type: "checking",
        currency: "UAH",
        id: "4rrhekqnwev"
      },
      {
        name: "reretr",
        balance: 2222,
        type: "checking",
        currency: "UAH",
        id: "i78h0bobom"
      }
    ];
  }

  addAccountItemClick() {}
}
export const accountsModule = angular
  .module("accounts", ["ngMaterial"])
  .component("accounts", {
    template,
    controller: AccountsController
  }).name;
