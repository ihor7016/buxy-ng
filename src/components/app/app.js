import angular from "angular";
import template from "./app.html";

import { drawerModule } from "../drawer/drawer";
import { toolbarModule } from "../toolbar/toolbar";
import { transactionsModule } from "../transactions/transactions";

export class AppController {
  constructor() {
    this.drawerOpened = true;
  }

  openDrawer() {
    this.drawerOpened = !this.drawerOpened;
  }
}

export const appModule = angular
  .module("appModule", [drawerModule, toolbarModule, transactionsModule])
  .component("app", {
    controller: AppController,
    template
  }).name;
