import { TestContext } from "./infrastructure/context";
import { describePage } from "./infrastructure/describePage";

describePage(
    "/ticket/settings/routeRules/",
    ({ page, setup }: TestContext) => {
        beforeAll(async () => {
            await setup.createSite({
                siteId: 0,
                admin: "joe",
                modules: ["livechat"],
                features: ["department"],
            });
        });

        test(`page title should be "test"`, async () => {
            expect(page.title()).toBe("test");
        });
    }
);
