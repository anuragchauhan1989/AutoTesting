import { Browser } from "./browser";
import { WaitCondition } from "./conditions";


export interface NewablePage<T extends BasePage> {
    new(browser: Browser): T;
  }

export abstract class BasePage{

    private url!: string;

    protected setUrl(url: string) {
        this.url = url;
    }

    public async navigate(): Promise<void> {
        await this.browser.navigate(this.url);
        //await this.browser.wait(this.loadCondition());
    }

    public abstract loadCondition(): WaitCondition;

    public constructor(protected browser: Browser) {
        
    }


}