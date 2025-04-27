import { $ } from "@wdio/globals";

class MessagingPage {

  get messagingPageTitle() {
    return $(".c-fGbiyG > .c-PJLV");
  }
  get seePlanPayAsYouGoButton() {
    return $("//*[@href='#pay-as-you-go']/span/span[1]");
  }
  get payAsYouGoSectionTitle() {
    return $("#pay-as-you-go");
  }
  get seePlanVolumeBasedButton() {
    return $(".c-ihSZrZ");
  }
  get volumeBasedSection() {
    return $(".c-PJLV-kDbYnL-backgroundColor-black");
  }
  get tollFreeTab() {
    return $('[id$="-trigger-toll-free"]');
  }
  get servicesTollFree() {
    return $("#Services > .c-foWUMn > .c-gHhhyB");
  }
  get shortCodeTab() {
    return $('[id$="-trigger-short-code"]');
  }
  get servicesShortCode() {
    return $("#Services > :nth-child(1) > .c-gHhhyB");
  }
  get countryFilterButton() {
    return $("#country-filter");
  }
  get countryDropdown() {
    return $('[data-state="open"]');
  }
  get countrySelection() {
    return $('[role="option"]');
  }
  get countrySelectedName() {
    return $('[aria-label="Country"]');
  }
  get currencyFilterButton() {
    return $("#currency-filter");
  }
  get currencyDropdown() {
    return $('[data-state="open"]');
  }
  get currencySelection() {
    return $('[role="option"]');
  }
  get currencySelectedName() {
    return $('[aria-label="Currency"]');
  }
  get question() {
    return $("/html/body/div[1]/div/main/section[6]/div/div[2]/div/div[3]");
  }
  get answerOnFAQ() {
    return $('//*[@id="radix-:Rar7rdm:"]/p');
  }
  get pricingIllustrations() {
    return $$(".c-eKZEkL");
  }
  get smsApiSection() {
    return $("/html/body/div[1]/div/main/div[2]");
  }
  get smsApiSectionTitle() {
    return $("/html/body/div[1]/div/main/div[2]/div/div[1]/strong");
  }

  visitMessagingPage() {
    return browser.url("/pricing/messaging");
  }
  async clickSeePlanPayAsYouGo() {
    await this.seePlanPayAsYouGoButton.click();
  }
  async clickSeePlanVolumeBased() {
    await this.seePlanVolumeBasedButton.click();
  }
  async tollFreeTabSelected() {
    await this.tollFreeTab.click();
  }
  async shortCodeTabSelected() {
    await this.shortCodeTab.click();
  }
  async countryFilterClick() {
    await this.countryFilterButton.click({ force: true });
  }
  async countrySelected() {
    await this.countrySelection.toHaveText("France").click({ force: true });
  }
  async currencyFilterClick() {
    await this.currencyFilterButton.click({ force: true });
  }
  async currencySelected() {
    await this.currencySelection.contains("EUR").click({ force: true });
  }
  async clickFAQ() {
    await this.question.click();
  }
  async closeFAQ() {
    await this.question.click();
  }
}

export default MessagingPage;
