import angular from "angular";
import template from "./app.html";

import { tableTransactionsModule } from "../table-transactions/table-transactions";

export const appModule = angular
  .module("appModule", [tableTransactionsModule])
  .component("app", {
    template
  }).name;
