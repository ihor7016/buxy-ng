import template from "./app.html";

import "angular-animate";
import "angular-aria";
import "angular-material";

import { transactionDialogModule } from "../transaction-dialog/transaction-dialog";

export const appModule = angular
  .module("appModule", ["ngMaterial", transactionDialogModule])
  .component("app", {
    template,
    bindings: {}
  }).name;
