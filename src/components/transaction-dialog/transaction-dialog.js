import angular from "angular";
import template from "./transaction-dialog.html";

import ngAnimate from "angular-animate";
import ngMaterial from "angular-material";

export class TransactionDialogController {
  constructor($mdDialog) {
    this.$mdDialog = $mdDialog;
    this.tags = ["transport", "food", "salary"];
    this.accounts = ["Privat", "BoaBank", "Cash"];
  }

  $onChanges(changes) {
    if (changes.show.currentValue) {
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
      constructor($mdDialog, $filter) {
        this.$mdDialog = $mdDialog;
        this.$filter = $filter;
        this.date = new Date();
        this.tags = self.tags;
        this.accounts = self.accounts;
      }

      submit() {
        console.log({
          type: this.type,
          desc: this.description,
          amount: this.amount,
          date: this.$filter("date")(this.date, "yyyy-MM-dd"),
          account: this.account,
          tag: this.tag
        });
        this.$mdDialog.hide();
      }

      abort() {
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
