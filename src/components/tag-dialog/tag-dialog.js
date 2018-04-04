import angular from "angular";
import template from "./tag-dialog.html";

import ngAnimate from "angular-animate";
import ngMaterial from "angular-material";

export class TagDialogController {
  constructor($mdDialog) {
    this.$mdDialog = $mdDialog;
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
        clickOutsideToClose: true
      })
      .then(
        data => this.onDialogSubmit({ data: data }),
        () => this.onDialogClose()
      );
  }
}

export class DialogController {
  constructor($mdDialog) {
    this.$mdDialog = $mdDialog;
  }

  submit() {
    this.$mdDialog.hide(this.tag);
  }

  abort() {
    this.$mdDialog.cancel();
  }
}

export const tagDialogModule = angular
  .module("tagDialogModule", [ngMaterial, ngAnimate])
  .component("tagDialog", {
    controller: TagDialogController,
    bindings: {
      isOpen: "<",
      openEvent: "<",
      onDialogSubmit: "&",
      onDialogClose: "&"
    }
  }).name;
