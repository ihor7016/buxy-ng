import angular from "angular";
import template from "./accounts.html";
class AccountsController {
  addAccountItemClick() {}
}
export const accountsModule = angular
  .module("accounts", ["ngMaterial"])
  .component("accounts", {
    template,
    controller: AccountsController
  }).name;
