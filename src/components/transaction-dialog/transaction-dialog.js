import template from "./transaction-dialog.html";

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
  .module("transactionDialogModule", [])
  .component("transactionDialog", {
    controller: TransactionDialogController,
    template: `<md-button class="md-fab md-primary" aria-label="FAB" ng-click="$ctrl.showDialog()">
      <md-icon>
        <i class="material-icons">add</i>
      </md-icon>
    </md-button>`
  }).name;
