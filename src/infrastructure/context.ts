import { Envrionment } from "./action/environment";
import { Browser } from "./action/browser";
import { FindPage } from "./selector/FindPage";

export interface TestContext {
  page: FindPage;
  setup: Envrionment;
  browser: Browser;
}