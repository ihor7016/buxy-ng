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
    if (changes.isOpen.currentValue) {
      this.showDialog(changes.isOpen.currentValue.event);
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
        this.types = self.types;
        this.currencies = self.currencies;
      }

      submit() {
        console.log({
          name: this.account,
          balance: this.balance,
          type: this.type,
          currency: this.currency
        });
        this.$mdDialog.hide();
      }

      abort() {
        this.$mdDialog.cancel();
      }
    };
  }
}

export const accountDialogModule = angular
  .module("accountDialogModule", [ngMaterial, ngAnimate])
  .component("accountDialog", {
    controller: AccountDialogController,
    bindings: {
      isOpen: "<"
    }
  }).name;
