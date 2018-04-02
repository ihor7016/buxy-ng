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
    if (changes.isOpen.currentValue) {
      this.showDialog(changes.isOpen.currentValue.event);
    }
  }

  showDialog(ev) {
    this.$mdDialog.show({
      template,
      controllerAs: "$ctrl",
      controller: () => new DialogController(this),
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true
    });
  }
}
class DialogController {
  constructor(props) {
    this.$mdDialog = props.$mdDialog;
    this.$filter = props.$filter;
    this.date = new Date();
    this.tags = props.tags;
    this.accounts = props.accounts;
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
