import { generateDriver } from "../utils/helpers";
import configs from "../config.json";
import { Element } from "../elements/element";
import { DriverHelper } from "../utils/navigate";
import { defineFeature } from "jest-cucumber";

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

    defineFeature(feature,(test) => {
      const resp =  init();
      setting = resp.setting;
      driver = resp.driver;

      beforeEach(async () => {
        await driver.get(configs.enterUrl);
      });
      afterEach(async () => {
        if (driver) {
          await driver.quit();
        }
      });
      callback(test, setting);
    });
  });
};
