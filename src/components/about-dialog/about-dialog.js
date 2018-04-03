import angular from "angular";
import template from "./about-dialog.html";
import packageFile from "../../../package";

import ngAnimate from "angular-animate";
import ngMaterial from "angular-material";

export class AboutDialogController {
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
      .catch(() => this.onDialogClose());
  }
}

export class DialogController {
  constructor($mdDialog) {
    this.$mdDialog = $mdDialog;
    this.version = packageFile.version;
  }

  submit() {
    this.$mdDialog.cancel();
  }
}

export const aboutDialogModule = angular
  .module("aboutDialogModule", [ngMaterial, ngAnimate])
  .component("aboutDialog", {
    controller: AboutDialogController,
    bindings: {
      isOpen: "<",
      openEvent: "<",
      onDialogClose: "&"
    }
  }).name;
