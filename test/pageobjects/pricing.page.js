import { $ } from '@wdio/globals'

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
      return $("#enjoy-all-the-benefits-at-no-extra-cost");
    }
    get allBenefitsBlocks() {
      return $("ul.c-cUhiIV li");
    }
    // get benefitBlockTitle(index) {
    //   const selectors = {
    //     1: "#599Qs9ih0ykXM1lAe3zMqv",
    //     2: "#3qDfqRTIdq5MAy3eUq3lCp",
    //     3: "#7m7wH75h848E7Pjq9C5L1d",
    //        };
    //    const selector = selectors[index];
    //    return $(selector);
    // }
    get communicationsSection() {
      return $("#communications > .c-fKwEGa");
    }
    get messagingApiOption() {
      return $(
        "#communications > :nth-child(2) > :nth-child(1) > .c-uXJmG > .c-iNaFFq > .c-dnmyni"
      );
    }
  
       async visitPricingPage() {
        await browser.url("/pricing");
    }
    async messagingApiSelect() {
      await this.messagingApiOption.click();
    }
  }

  export default new PricingPage();
  