import angular from "angular";
import template from "./account-dialog.html";

import ngAnimate from "angular-animate";
import ngMaterial from "angular-material";

export class AccountDialogController {
  constructor($mdDialog) {
    this.$mdDialog = $mdDialog;
    this.types = [
      "checking",
      "savings",
      "credit card",
      "cash",
      "investiment",
      "loan",
      "cd",
      "real estate",
      "vehicle",
      "insurance",
      "other"
    ];
    this.currencies = ["UAH", "USD", "EUR"];
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
          types: this.types,
          currencies: this.currencies
        }
      })
      .then(
        data => this.onDialogSubmit({ data: data }),
        () => this.onDialogClose()
      );
  }
}

export class DialogController {
  constructor($mdDialog, types, currencies) {
    this.$mdDialog = $mdDialog;
    this.types = types;
    this.currencies = currencies;
  }

  submit() {
    this.$mdDialog.hide({
      name: this.account,
      balance: parseInt(this.balance),
      type: this.type,
      currency: this.currency
    });
  }

  abort() {
    this.$mdDialog.cancel();
  }
}

export const accountDialogModule = angular
  .module("accountDialogModule", [ngMaterial, ngAnimate])
  .component("accountDialog", {
    controller: AccountDialogController,
    bindings: {
      isOpen: "<",
      openEvent: "<",
      onDialogSubmit: "&",
      onDialogClose: "&"
    }
  }).name;
