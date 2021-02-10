import { Browser } from "../utils";
import { NewLoginPage } from "./NewLoginPage";

export {
  NewLoginPage
};


export class AllPages {
    public lp: NewLoginPage;

    constructor(public browser: Browser) {
      this.lp = new NewLoginPage(browser);
    }
     
    public async dispose(): Promise<void> {
      await this.browser.close();
    }
}
