import template from "./transaction-dialog.html";

export class TransactionDialogController {
  constructor($mdDialog) {
    this.$mdDialog = $mdDialog;
    // this.tags = ["transport", "food", "salary"];
    // this.accounts = ["Privat", "BoaBank", "Cash"];
    // this.api = {};
    // this.api.showDialog = this.showDialog;
  }

  showDialog(ev) {
    this.$mdDialog
      .show({
        template,
        controller: DialogController,
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
}

export class DialogController {
  constructor($mdDialog) {
    this.$mdDialog = $mdDialog;
    this.tags = ["transport", "food", "salary"];
    this.accounts = ["Privat", "BoaBank", "Cash"];
  }
  hide() {
    console.log("ok");
    this.$mdDialog.hide(this);
  }

  abort() {
    console.log("cancel");
    this.$mdDialog.cancel();
  }
}

export const transactionDialogModule = angular
  .module("transactionDialogModule", [])
  .component("transactionDialog", {
    controller: TransactionDialogController,
    template: `<md-button class="md-fab md-primary" aria-label="FAB" ng-click="$ctrl.showDialog($event)">
      <md-icon>
        <i class="material-icons">add</i>
      </md-icon>
    </md-button>`
    // bindings: {
    //   btnClick: "&"
    //}
  }).name;
