import angular from "angular";
import template from "./app.html";

import { tableTransactionModule } from "../table-transactions/table-transactions";

export const appModule = angular
  .module("appModule", ["ngTouch", "ui.grid"])
  .component("app", {
    template
  }).name;
