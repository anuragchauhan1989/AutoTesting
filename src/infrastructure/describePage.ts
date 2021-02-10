import { TestContext } from "./context";

export const describePage = (path: string, describeFn: (test: TestContext) => void) => {
  const context = {} as TestContext;

  beforeEach(() => {
    context.browser.openPage(path);
  });

  afterEach(() => { });

  describeFn(context);
};

