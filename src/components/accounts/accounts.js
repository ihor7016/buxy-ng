import angular from "angular";
import ngAnimate from "angular-animate";
import ngAria from "angular-aria";
import ngMaterial from "angular-material";
import template from "./accounts.html";

import { buttonMoreModule } from "../button-more/button-more";
import { accountDialogModule } from "../account-dialog/account-dialog";

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

  handleAddAccountClick(event) {
    this.isAccountDialogOpen = true;
    this.accountDialogOpenEvent = event;
  }

  handleAccountDialogSubmit(data) {
    console.log(data);
    this.isAccountDialogOpen = false;
  }

  handleAccountDialogClose() {
    this.isAccountDialogOpen = false;
  }
}

export const accountsModule = angular
  .module("accounts", [
    ngMaterial,
    ngAria,
    ngAnimate,
    buttonMoreModule,
    accountDialogModule
  ])
  .component("accounts", {
    template,
    controller: AccountsController
  }).name;
