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
    if (changes.isOpen.currentValue === true) {
      this.showDialog(changes.openEvent.currentValue);
    }
  }

  showDialog(ev) {
    this.$mdDialog
      .show({
        template,
        controllerAs: "$ctrl",
        controller: DialogController,
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose: true,
        locals: {
          tags: this.tags,
          accounts: this.accounts
        }
      })
      .then(
        data => this.onDialogSubmit({ data: data }),
        () => this.onDialogClose()
      );
  }
}

export class DialogController {
  constructor($mdDialog, $filter, tags, accounts) {
    this.$mdDialog = $mdDialog;
    this.$filter = $filter;
    this.date = new Date();
    this.tags = tags;
    this.accounts = accounts;
  }

  submit() {
    this.$mdDialog.hide({
      type: this.type,
      desc: this.description,
      amount: parseInt(this.amount),
      date: this.$filter("date")(this.date, "yyyy-MM-dd"),
      account: this.account,
      tag: this.tag
    });
  }

  abort() {
    this.$mdDialog.cancel();
  }
}

export const transactionDialogModule = angular
  .module("transactionDialogModule", [ngMaterial, ngAnimate])
  .component("transactionDialog", {
    controller: TransactionDialogController,
    bindings: {
      isOpen: "<",
      openEvent: "<",
      onDialogClose: "&",
      onDialogSubmit: "&"
    }
  }).name;
