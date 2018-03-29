import angular from "angular";
import template from "./app.html";

import "angular-animate";
import "angular-aria";
import "angular-material";

import { transactionDialogModule } from "../transaction-dialog/transaction-dialog";

export const appModule = angular
  .module("appModule", ["ngMaterial", "ngAnimate", transactionDialogModule])
  .component("app", {
    template
  }).name;
