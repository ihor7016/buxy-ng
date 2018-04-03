import angular from "angular";
import template from "./app.html";

import { transactionsModule } from "../transactions/transactions";

export const appModule = angular
  .module("appModule", [transactionsModule])
  .component("app", {
    template
  }).name;
