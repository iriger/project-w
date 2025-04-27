import { $ } from "@wdio/globals";

class TwilioaltPage {
  get pricingComparisonSection() {
    return $("/html/body/div[1]/div/main/section[3]/div/div[1]");
  }
  get pricingComparisonOption() {
    return $("//*[@id='4gqTF9IjdzXxrEqa6Kxdef']/div/div[2]/div[2]/div[3]");
  }
  get closeIcon() {
    return $("h3=Numbers");
  }
  get comparisonInfo() {
    return $("[id*='radix-:Rlmhbdm:']");
  }
  get savingCalculatorSection() {
    return $("h2*=How much");
  }
  get comparisonFirstOption() {
    return $("input[id='number-type-0']");
  }
  get next() {
    return $(".c-kNQyMh");
  }
  get comparisonSecondOption() {
    return $("input[id='send-messages-1']");
  }
  get secondNext() {
    return $("span=Next");
  }
  get comparisonThirdOption() {
    return $("input[id='receive-messages-1']");
  }
  get calculate() {
    return $("span=Calculate savings");
  }
  get compareCostSection() {
    return $(".c-gHxecU.c-gHxecU-lohFFQ-stepper-true");
  }

  visitTwilioaltPage() {
    return browser.url("/the-better-twilio-alternative");
  }
  async selectPricingComparisonOption() {
    await this.pricingComparisonOption.click();
  }
  async closePricingComparisonOption() {
    await this.closeIcon.click();
  }
  async selectFirstComparisonOption() {
    await this.comparisonFirstOption.click();
    await this.next.click();
  }
  async selectSecondComparisonOption() {
    await this.comparisonSecondOption.click();
    await this.secondNext.click();
  }
  async selectThirdComparisonOption() {
    await this.comparisonThirdOption.click();
  }
  async calculateSavings() {
    await this.calculate.click();
  }
}

export default TwilioaltPage;
