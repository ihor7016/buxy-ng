import angular from "angular";
import template from "./transaction-dialog.html";

import ngAnimate from "angular-animate";
import ngMaterial from "angular-material";
// import ngAria from "angular-aria";

export class TransactionDialogController {
  constructor($mdDialog) {
    this.$mdDialog = $mdDialog;
    this.tags = ["transport", "food", "salary"];
    this.accounts = ["Privat", "BoaBank", "Cash"];
  }

  $onChanges(changes) {
    if (changes.show.currentValue.show === true) {
      this.showDialog(changes.show.currentValue.event);
    }
  }

  showDialog(ev) {
    this.$mdDialog.show({
      template,
      controllerAs: "$ctrl",
      controller: this.dialogController(),
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true
    });
  }
  dialogController() {
    const self = this;
    return class {
      constructor($mdDialog) {
        this.$mdDialog = $mdDialog;
        this.tags = self.tags;
        this.accounts = self.accounts;
      }

      submit() {
        console.log("ok");
        this.$mdDialog.hide();
      }

      abort() {
        console.log("cancel");
        this.$mdDialog.cancel();
      }
    };
  }
}

export const transactionDialogModule = angular
  .module("transactionDialogModule", [ngMaterial, ngAnimate])
  .component("transactionDialog", {
    controller: TransactionDialogController,
    bindings: {
      show: "<"
    }
  }).name;
