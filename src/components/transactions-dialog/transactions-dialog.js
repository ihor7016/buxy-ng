import angular from "angular";
import template from "./transactions-dialog.html";

export const transactionDialogModule = angular
  .module("transactionDialog", [])
  .component("transactionDialog", {
    template
  }).name;
