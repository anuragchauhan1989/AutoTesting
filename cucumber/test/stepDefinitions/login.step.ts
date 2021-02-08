import { Key } from "selenium-webdriver";
import { loadFeature, defineFeature } from "jest-cucumber";
import { DefineScenarioFunctionWithAliases } from "jest-cucumber/dist/src/feature-definition-creation";
import { myDefineFeature, Setting } from "../../src/extension/describeExtension";

const feature = loadFeature("./cucumber/features/login.feature");


myDefineFeature(
    feature,
    (test: DefineScenarioFunctionWithAliases, setting: Setting) => {
        test("Check LiveChat Dashboard opens on login", ({ given, when, then }) => {
            given(/^Agent is on Login Page$/, async () => {
                console.log("given step is executed...");
            });

            when(/^Agent login with valid <([^>]*)> and <([^>]*)>$/, async (email, password) => {
                const emailInput = await setting.selector.getEmailInput();
                emailInput.sendKeys(email);
                const passwordInput = await setting.selector.getPasswordInput();
                passwordInput.sendKeys(password);

                const loginButton = await setting.selector.getLoginButton();
                expect(loginButton).toBeDefined();
                await (loginButton).click();
            });

            then(/^Dashboard page opens up$/, async () => {
                await setting.navigate.waitForPage("/livechat/dashboard/", 5000);
            });
        });
    }
);

