import { expect } from "@wdio/globals";

import HomePage from "../pageobjects/home.page.js";
import PricingPage from "../pageobjects/pricing.page.js";
import SolutionsPage from "../pageobjects/solutions.page.js";

describe("Testing Telnyx home page", () => {

  const homePage = new HomePage();
  const pricingPage = new PricingPage();
  const solutionsPage = new SolutionsPage();

  it("Test 1-1 - verify Pricing button in the header", async () => {
    await homePage.openHomePage();
    await homePage.navigateToPricingPage();
    await expect(pricingPage.pricingPageTitle).toHaveText("Pricing");
    await expect(pricingPage.pricingPageDescription).toHaveText(
      expect.stringContaining("Flexible, transparent")
    );
  });

  it("Test 1-2 - verify Products button in the header", async () => {
    await homePage.openHomePage();
    await homePage.clickProductsLink();
    await homePage.moveCursor();
    await expect(
      (
        await homePage.productsButton.getCSSProperty("color")
      ).value
    ).toBe("rgba(0,227,170,1)");
    await expect(homePage.productsModal).toBeDisplayed();
  });

  it("Test 1-3 - verify Solutions button in the header", async () => {
    await homePage.openHomePage();
    await homePage.clickSolutionsButton();
    await expect(homePage.solutionsModal).toBeDisplayed();
    await homePage.clickAllSolutionsLink();
    await expect(solutionsPage.solutionsTitle).toHaveText(
      expect.stringContaining("Solutions for scaling your business")
    );
  });

  it("Test 1-4 - Need more info section", async () => {
    await homePage.openHomePage();
    await homePage.moreInfoSection.scrollIntoView();
    await homePage.selectArticle();
    await expect(homePage.selectedArticleTitle).toHaveText(
      expect.stringContaining("How to improve customer")
    );
  });

  it("Tet 1-5 - footer - links", async () => {
    await homePage.openHomePage();
    await homePage.footer.scrollIntoView();
    await homePage.selectLinkFooter();
    await expect(homePage.selectedLinkFooterTitle).toHaveText(
      expect.stringContaining("Privacy Policy")
    );
  });
  
});
