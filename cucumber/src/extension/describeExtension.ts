import { defineFeature } from "jest-cucumber";
import { generateDriver } from "../utils/helpers";
import { DriverHelper } from "../utils/navigate";
import configs from "..//..//..//config.json";
import {Element} from "..//../src/pages/element";

export interface Setting {
  selector: Element;
  navigate: DriverHelper;
}

export function myDefineFeature(feature: any, callback: any) {
  configs.browsers.forEach((browser) => {
    let setting: Setting;
    let driver: any;
    const init =  () => {
      const driver =  generateDriver(browser);
      return {
        driver,
        setting: {
          selector: new Element(driver, ""),
          navigate: new DriverHelper(driver),
        },
      };
    };
    debugger;
    defineFeature(feature,(test) => {
      const resp =  init();
      setting = resp.setting;
      driver = resp.driver;

      beforeEach(async () => {
        await driver.get(configs.enterUrl);
      });
      afterEach(async () => {
        // if (driver) {
        //   await driver.quit();
        // }
      });
      callback(test, setting);
    });
  });
};
