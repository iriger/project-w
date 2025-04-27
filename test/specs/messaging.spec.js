import { expect } from "@wdio/globals";

import MessagingPage from "../pageobjects/messaging.page.js";

describe("Testing Telnyx messaging page", () => {

  const messagingPage = new MessagingPage();

  it("Test 4-1 - Messaging API pricing page / Pricing options section", async () => {
    await messagingPage.visitMessagingPage();
    await messagingPage.clickSeePlanPayAsYouGo();
    await expect(messagingPage.payAsYouGoSectionTitle).toHaveText(
      expect.stringContaining("Pay as you go")
    );
    await messagingPage.clickSeePlanVolumeBased();
    await messagingPage.volumeBasedSection.toBeDisplayed;
    await expect(messagingPage.volumeBasedSection).toHaveText(
      expect.stringContaining("Volume-based pricing")
    );
  });

  it("Test 4-2 - Messaging API pricing page / Pay as you go section", async () => {
    await messagingPage.visitMessagingPage();
    await messagingPage.clickSeePlanPayAsYouGo();
    await expect(messagingPage.payAsYouGoSectionTitle).toBeDisplayed();
    await messagingPage.tollFreeTabSelected();
    await expect(messagingPage.servicesTollFree).toBeDisplayed();
    await messagingPage.shortCodeTabSelected();
    await expect(messagingPage.servicesShortCode).toBeDisplayed();
  });

  it("Test 4-3 FAQ section", async () => {
    await messagingPage.visitMessagingPage();
    await messagingPage.clickFAQ();
    await expect(messagingPage.answerOnFAQ).toBeDisplayed;
    await messagingPage.closeFAQ();
    await expect(messagingPage.answerOnFAQ).not.toBeDisplayed;
  });

  it("Test 4-4 pricing section illustrations", async () => {
    await messagingPage.visitMessagingPage();
    await expect(messagingPage.pricingIllustrations.toHaveLength(3));
    for (let i = 0; i < messagingPage.pricingIllustrations.length; i++) {
      await expect(messagingPage.pricingIllustrations[i].toBeDisplayed);
    }
  });

  it("Test 4-5 SMS API section", async () => {
    await messagingPage.visitMessagingPage();
    await messagingPage.smsApiSection.scrollIntoView();
    await expect(
      (
        await messagingPage.smsApiSection.getCSSProperty("background-color")
      ).value
    ).toBe("rgba(230,227,211,1)");
    await expect(
      (
        await messagingPage.smsApiSectionTitle.getCSSProperty("font-size")
      ).value
    ).toBe("44px");
  });

});
