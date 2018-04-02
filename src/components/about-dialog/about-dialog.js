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
    this.version = packageFile.version;
  }

  submit() {
    this.$mdDialog.hide();
  }
}

export const aboutDialogModule = angular
  .module("aboutDialogModule", [ngMaterial, ngAnimate])
  .component("aboutDialog", {
    controller: AboutDialogController,
    bindings: {
      isOpen: "<"
    }
  }).name;
