import {loadFeature, defineFeature} from "jest-cucumber";
import { DefineScenarioFunctionWithAliases } from "jest-cucumber/dist/src/feature-definition-creation";
import {myDefineFeature, Setting} from "../../extension/describeExtension";

const feature = loadFeature("./cucumber/features/login.feature");


myDefineFeature(
    feature,
    (test: DefineScenarioFunctionWithAliases, setting: Setting) => {
        test("Check LiveChat Dashboard opens on login", ({given, when, then}) => {
            given(/^Agent is on Login Page$/, async () => {
                console.log("given step is executed...");
                const loginEle = await setting.selector.getInput();
            });

            when(/^Agent login with valid (.*) and (.*)$/, (emailid, password) => {
                console.log("when step is executed...");
            });

            then(/^Dashboard page opens up$/, () => {
                console.log("then step is executed...");
            });
        });
    }
);

