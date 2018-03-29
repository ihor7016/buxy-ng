import angular from "angular";
import template from "./transaction-dialog.html";

import "angular-animate";
import "angular-aria";
import "angular-material";

export class TransactionDialogController {
  constructor($mdDialog) {
    this.$mdDialog = $mdDialog;
  }

  showDialog(ev) {
    this.$mdDialog
      .show({
        controller: this.DialogController.bind(this),
        template,
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose: true
      })
      .then();
  }

  DialogController() {
    this.cancel = function() {
      this.$mdDialog.cancel();
    };

    this.answer = function(answer) {
      this.$mdDialog.hide(answer);
    };
  }
}

export const transactionDialogModule = angular
  .module("transactionDialogModule", ["ngMaterial"])
  .component("transactionDialog", {
    controller: TransactionDialogController
  }).name;
