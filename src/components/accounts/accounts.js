import angular from "angular";
import ngAnimate from "angular-animate";
import ngAria from "angular-aria";
import ngMaterial from "angular-material";
import template from "./accounts.html";
import { buttonMoreModule } from "../button-more/button-more";

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

  handleItemClick() {
    console.log();
  }
}

export const accountsModule = angular
  .module("accounts", [ngMaterial, ngAria, ngAnimate, buttonMoreModule])
  .component("accounts", {
    template,
    controller: AccountsController
  }).name;
