import { expect } from "@wdio/globals";

import TwilioaltPage from "../pageobjects/twilio-alternative.page.js";

describe("Testing Telnyx vs Twilio page", () => {

  const twilioaltPage = new TwilioaltPage();

  it("Test 5-1 - pricing comparison section", async () => {
    await twilioaltPage.visitTwilioaltPage();
    await twilioaltPage.pricingComparisonSection.scrollIntoView();
    await twilioaltPage.selectPricingComparisonOption();
    await expect(twilioaltPage.comparisonInfo).toBeDisplayed;
    await browser.pause(10000);
    await twilioaltPage.closePricingComparisonOption();
    await expect(twilioaltPage.comparisonInfo).not.toBeDisplayed;
  });

  it("Test 5-2 - saving calculator", async () => {
    await twilioaltPage.visitTwilioaltPage();
    await twilioaltPage.savingCalculatorSection.scrollIntoView();
    await twilioaltPage.selectFirstComparisonOption();
    await twilioaltPage.selectSecondComparisonOption();
    await twilioaltPage.selectThirdComparisonOption();
    await twilioaltPage.calculateSavings();
    await expect(twilioaltPage.compareCostSection).toBeDisplayed;
    await expect(twilioaltPage.compareCostSection).toHaveText(
      expect.stringContaining("SAVINGS PER MONTH")
    );
  });
  
});
