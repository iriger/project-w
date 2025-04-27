import { $ } from "@wdio/globals";

class PricingPage {
  get pricingPageTitle() {
    return $("h1.c-fGbiyG ");
  }
  get pricingPageDescription() {
    return $('//*[@id="6GSrceTAivjVyuwh4oKdM8"]/div/div[2]/p');
  }
  get firstSection() {
    return $('//*[@id="7ym2mQyts3WNs47fPUkIkB"]/div/div[1]');
  }
  get firstSectionTitle() {
    return $('//*[@id="7ym2mQyts3WNs47fPUkIkB"]/div/div[1]/strong[1]');
  }
  get secondSection() {
    return $('//*[@id="7ym2mQyts3WNs47fPUkIkB"]/div/div[2]');
  }
  get secondSectionTitle() {
    return $('//*[@id="7ym2mQyts3WNs47fPUkIkB"]/div/div[2]/strong[1]');
  }
  get allBenefitsSection() {
    return $("//*[@id='__next']/div/main/section[3]/div");
  }
  get allBenefitsBlocks() {
    return $$("ul.c-cUhiIV li");
  }
  get benefitBlockTitles() {
    return $$("//*/ul[@class='c-cUhiIV c-jsabao']/li/div/div/h3");
  }
  get communicationsSection() {
    return $("#communications > .c-fKwEGa");
  }
  get messagingApiOption() {
    return $(
      "#communications > :nth-child(2) > :nth-child(1) > .c-uXJmG > .c-iNaFFq > .c-dnmyni"
    );
  }

  visitPricingPage() {
    return browser.url("/pricing");
  }
  async selectMessagingApi() {
    await this.messagingApiOption.click();
  }
}

export default PricingPage;
