import angular from "angular";
import template from "./app.html";

import "angular-animate";
import "angular-aria";
import "angular-material";

import { transactionDialogModule } from "../transactions-dialog/transactions-dialog";

export const appModule = angular
  .module("appModule", ["ngMaterial", transactionDialogModule])
  .component("app", {
    template
  }).name;
