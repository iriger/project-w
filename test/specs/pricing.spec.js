import { expect } from "@wdio/globals";

import HomePage from "../pageobjects/home.page.js";
import PricingPage from "../pageobjects/pricing.page.js";
import MessagingPage from "../pageobjects/messaging.page.js";

describe("Testing Telnyx pricing page", () => {
  const homePage = new HomePage();
  const pricingPage = new PricingPage();
  const messagingPage = new MessagingPage();

  it("Test 2-1 - verify Pricing page title", async () => {
    await homePage.openHomePage();
    await homePage.navigateToPricingPage();
    await expect(pricingPage.pricingPageTitle).toHaveText("Pricing");
    await expect(pricingPage.pricingPageDescription).toHaveText(
      expect.stringContaining("Flexible, transparent")
    );
  });

  it("Test 2-2 - Pricing page content", async () => {
    await pricingPage.visitPricingPage();
    await expect(
      (
        await pricingPage.firstSection.getCSSProperty("background-color")
      ).value
    ).toBe("rgba(0,227,170,0.95)");
    await expect(pricingPage.firstSectionTitle).toHaveText("PAY AS YOU GO");
    await expect(
      (
        await pricingPage.secondSection.getCSSProperty("background-color")
      ).value
    ).toBe("rgba(254,253,245,1)");
    await expect(pricingPage.secondSectionTitle).toHaveText(
      "VOLUME-BASED PRICING"
    );
  });

  it("Test 2-3 - Pricing page / Benefits section", async () => {
    await pricingPage.visitPricingPage();
    await pricingPage.allBenefitsSection.scrollIntoView();
    await expect(pricingPage.allBenefitsSection).toHaveText(
      expect.stringContaining("benefits")
    );
    pricingPage.allBenefitsBlocks.toHaveLength(3);
    const expectedTitles = [
      "Free in-house support",
      "Portal access",
      "Automatic discounts",
    ];
    for (let i = 0; i < pricingPage.allBenefitsBlocks.length; i++) {
      await expect(
        pricingPage.benefitBlockTitles[i].toHaveText(expectedTitles[i])
      );
    }
  });

  it("Test 2-4 - Pricing page / Communications section navigation", async () => {
    await pricingPage.visitPricingPage();
    await pricingPage.communicationsSection.scrollIntoView();
    await expect(pricingPage.communicationsSection).toHaveText(
      expect.stringContaining("Communications")
    );
    await pricingPage.selectMessagingApi();
    await expect(messagingPage.messagingPageTitle).toHaveText(
      expect.stringContaining("API pricing")
    );
  });
});
