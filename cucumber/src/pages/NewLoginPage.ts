import { BasePage, Browser, Button, elementIsPresent, elementIsVisible, pageHasLoaded, TextInput, WaitCondition } from "../utils";
import config from "..//..//..//config.json";
import { WebDriver } from "selenium-webdriver";
import { attributeSelector, cssSelector } from "../utils/selectors";
import { findBy } from "../utils/locator";
 

export class NewLoginPage extends BasePage {

    public loadCondition(): WaitCondition {
        return elementIsPresent(() => this.emailInput);
    }
    constructor(browser: Browser) {
      super(browser);
      this.setUrl(`${config.enterUrl}/`);
    }

    @findBy('input[name="email"]')
    private emailInput!: TextInput;

    @findBy('input[name="password"]')
    private passwordInput!: TextInput;

    @findBy('//button//*[contains(text(), "Sign in")]')
    private loginButton!: Button;

      
      /**
       * if you want to login the main page,you can use this function instead of write the process in your main program
       * @Author Bruce.xu
       * @param username:the email addr
       * @param passwd
       * @param driver WebDriver
       */
       public async login(username: string, passwd: string): Promise<void>{
        debugger
        await this.emailInput.type(username);
        await this.passwordInput.type(passwd);
        await this.loginButton.click;
        //await this.browser.wait(pageHasLoaded)
      }

      
    
    
    
  }
  