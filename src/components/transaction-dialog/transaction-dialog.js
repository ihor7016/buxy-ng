import angular from "angular";
import template from "./transaction-dialog.html";

import ngAnimate from "angular-animate";
import ngMaterial from "angular-material";

export class TransactionDialogController {
  constructor($mdDialog, $filter) {
    this.$mdDialog = $mdDialog;
    this.$filter = $filter;
    this.tags = ["transport", "food", "salary"];
    this.accounts = ["Privat", "BoaBank", "Cash"];
  }

  $onChanges(changes) {
    if (changes.isOpen.currentValue.isOpen === true) {
      this.showDialog(changes.isOpen.currentValue.openEvent);
    }
  }

  showDialog(ev) {
    this.$mdDialog.show({
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
    });
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
}

export const transactionDialogModule = angular
  .module("transactionDialogModule", [ngMaterial, ngAnimate])
  .component("transactionDialog", {
    controller: TransactionDialogController,
    bindings: {
      isOpen: "<"
    }
  }).name;
