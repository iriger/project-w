import { $ } from "@wdio/globals";

class HomePage {
  get pricingLink() {
    return $("a > .c-ghTrAK > .c-swQxl");
  }
  get productsLink() {
    return $("//*[@id='main-menu-content']//button[1]");
  }
  get productsButton() {
    return $("//*[@id='main-menu-content']//button[1][@data-state='open']");
  }
  get productsModal() {
    return $(".c-jLWzSx");
  }
  get solutionsButton() {
    return $("//*[@id='main-menu-content']//button[2]");
  }
  get solutionsModal() {
    return $(".c-jLWzSx");
  }
  get allSolutionsLink() {
    return $("//p[normalize-space()='See all solutions']");
  }
  get e() {
    return $("//*[@id='radix-:Rl6jmH1:']/nav/div[1]");
  }
  get moreInfoSection() {
    return $("//*/main/section[11]");
  }
  get selectedArticle() {
    return $("[id*='ai-self-service-system']");
  }
  get selectedArticleTitle() {
    return $(".c-hfgiSY > :nth-child(3) > .c-PJLV");
  }
  get footer() {
    return $(".c-hfgiSY-ildsFlb-css");
  }
  get selectedLinkFooter() {
    return $(":nth-child(5) > .c-cTLmKz > :nth-child(4) > .c-fZcwcz");
  }
  get selectedLinkFooterTitle() {
    return $("h1.c-PJLV.c-fGbiyG.c-PJLV-cHtIMp-dark-false");
  }

  openHomePage() {
    return browser.url("/");
  }
  async navigateToPricingPage() {
    await this.pricingLink.click();
  }
  async clickProductsLink() {
    await this.productsLink.click();
  }
  async moveCursor() {
    await this.e.moveTo();
  }
  async clickSolutionsButton() {
    await this.solutionsButton.click();
  }
  async clickAllSolutionsLink() {
    await this.allSolutionsLink.click();
  }
  async selectArticle() {
    await this.selectedArticle.click();
  }
  async selectLinkFooter() {
    await this.selectedLinkFooter.click();
  }
}

export default HomePage;
