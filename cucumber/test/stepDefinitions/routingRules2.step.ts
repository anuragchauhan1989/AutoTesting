import { defineFeature, loadFeature } from "jest-cucumber";
import { AllPages } from "../../src/pages";
import { Browser } from "../../src/utils";
require("selenium-webdriver/chrome");
require("chromedriver");


const feature = loadFeature("./cucumber/test/features/routingRules.feature");

defineFeature(feature, (test) => {
    let pages: AllPages;

    beforeEach(async () => {
    debugger
      pages = new AllPages(new Browser('chrome'));
      await pages.lp.navigate();
      console.log("browser launched");
    });

    test("Check routingRules run correctly", ({given, when, then}) => {
        console.log("inside test");
        given(/^User has login in$/, async function (email: string = 'test1@comm100.com', password: string = '111111') {
            //await driver.sleep(4000);
            console.log("inside given");
            debugger
            pages.lp.login(email, password);

        });
        given(/^Trigger is enabled$/, async function () {
            // (await liveChatDashboard.ticketAndMessage(driver)).click();
            // await driver.sleep(5000);
            // (await ticketDashboard.settingMenu(driver)).click();
            // await driver.sleep(5000);
            // (await routingRules.routingRulesTrigger(driver)).click();
            // await driver.sleep(5000);


        });
        when(/^Ticket matches any event$/, async function () {

        });
        when(/^Ticket matches the trigger conditions$/, async function () {

        });
        then(/^ticket properties should be changed according to trigger$/, async function () {

        });
    });
    
  
    afterEach(async () => {
      await pages.dispose();
    });
  });
  