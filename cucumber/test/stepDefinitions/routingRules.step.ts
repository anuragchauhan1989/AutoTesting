import {WebDriver} from "selenium-webdriver";
import {loadFeature} from "jest-cucumber";
import {DefineScenarioFunctionWithAliases} from "jest-cucumber/dist/src/feature-definition-creation";
import {myDefineFeature, Setting} from "../../src/extension/describeExtension";
import * as loginPage from "..//../src/pages/loginPage"
import * as liveChatDashboard from "..//../src/pages/liveChat/dashboard"
import * as ticketDashboard from "..//../src/pages/ticketingAndMessaging/dashboard"
import * as routingRules from "..//../src/pages/ticketingAndMessaging/settings/routingRules"


const feature = loadFeature("./cucumber/test/features/routingRules.feature");

myDefineFeature(feature, (test: DefineScenarioFunctionWithAliases, setting: Setting) => {
        let driver: WebDriver = setting.selector.driver;
        test("Check routingRules run correctly", ({given, when, then}) => {
            given(/^User has login in$/, async function (email: string = 'test1@comm100.com', password: string = '111111') {
                await driver.sleep(4000);
                (await loginPage.email(driver)).sendKeys('frank@beta.com');
                (await loginPage.password(driver)).sendKeys(password);
                (await loginPage.loginButton(driver)).click();
                await driver.sleep(5000);
            });
            given(/^Trigger is enabled$/, async function () {
                (await liveChatDashboard.ticketAndMessage(driver)).click();
                await driver.sleep(5000);
                (await ticketDashboard.settingMenu(driver)).click();
                (await routingRules.routingRulesTrigger(driver)).click();


            });
            when(/^Ticket matches any event$/, async function () {

            });
            when(/^Ticket matches the trigger conditions$/, async function () {

            });
            then(/^ticket properties should be changed according to trigger$/, async function () {

            });
        });
    }
);
