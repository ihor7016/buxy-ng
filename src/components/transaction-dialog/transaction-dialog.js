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
    // this.api = {};
    // this.api.showDialog = this.showDialog;
  }

  // $onInit() {
  //   this.api = {};
  //   this.api.showDialog = this.showDialog;
  // }

  showDialog(ev) {
    // bindings: {
    //   api: "="
    // }
    this.$mdDialog
      .show({
        template,
        controllerAs: "$ctrl",
        controller: this.dialogController(),
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose: true
      })
      .then();
    // answer => {
    //   this.status = 'You said the information was "' + answer + '".';
    // },
    // function() {
    //   this.status = "You cancelled the dialog.";
    // }
  }
  dialogController() {
    const self = this;
    return class {
      constructor($mdDialog) {
        console.log(this);
        this.$mdDialog = $mdDialog;
        this.tags = self.tags;
        this.accounts = self.accounts;
      }

      hide() {
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
    template: `<md-button class="md-fab md-primary" aria-label="FAB" ng-click="$ctrl.showDialog($event)">
      <md-icon>
        <i class="material-icons">add</i>
      </md-icon>
    </md-button>`
    // bindings: {
    //   api: "="
    // }
  }).name;
