import { expect } from "@wdio/globals";

import HomePage from "../pageobjects/home.page.js";
import PricingPage from "../pageobjects/pricing.page.js";
import SolutionsPage from "../pageobjects/solutions.page.js";
import NotificationsPage from "../pageobjects/notifications.page.js";

describe("Testing Telnyx solutions page", () => {

  const homePage = new HomePage();
  const pricingPage = new PricingPage();
  const notificationsPage = new NotificationsPage();
  const solutionsPage = new SolutionsPage();

  it("Test 3-1 - navigation on Solutions page", async () => {
    await solutionsPage.solutionsPageVisit();
    await solutionsPage.useCasesButtonClick();
    await expect(solutionsPage.useCasesSectionTitle).toHaveText("USE CASES");
  });

  it("Test 3-2 - use cases navigation", async () => {
    await solutionsPage.solutionsPageVisit();
    await solutionsPage.useCasesButtonClick();
    await solutionsPage.accountNotificationsClick();
    await expect(notificationsPage.notificationsTitle).toHaveText(
      expect.stringContaining("Account notifications")
    );
  });

  it("Test 3-3 Solutions page filtering", async () => {
    await solutionsPage.solutionsPageVisit();
    await solutionsPage.openFilter();
    await solutionsPage.chooseFilterOption();
    await expect(solutionsPage.filterText).toHaveText("1 filter selected");
  });

  it("Test 3-4 Solutions page Search option", async () => {
    await solutionsPage.solutionsPageVisit();
    await solutionsPage.searchField.scrollIntoView();
    await solutionsPage.searchField.setValue("Cloud IVR");
    await browser.keys("Enter");
    await solutionsPage.selectedSearchOption.waitForDisplayed();
    await expect(solutionsPage.selectedSearchOption).toBeDisplayed;
    await expect(solutionsPage.selectedSearchOptionTitle).toHaveText(
      "Cloud IVR"
    );
  });
  
});
