import { $ } from "@wdio/globals";

class SolutionsPage {
  get solutionsTitle() {
    return $("h1.c-PJLV");
  }
  get useCasesButton() {
    return $("a[href='#use-cases']");
  }
  get useCasesSectionTitle() {
    return $("//strong[@class='c-PJLV c-fNZqWL']");
  }
  get filterButton() {
    return $("[id*='Rqdrdm']");
  }
  get travelFilter() {
    return $("input[name='Travel-and-hospitality']");
  }
  get closeFilterIcon() {
    return $(".PJLV.c-gruYud");
  }
  get selectedFilterButton() {
    return $("button[id*='Rqdrdm'] > .c-PJLV.c-ihLeEO");
  }
  get accountNotificationsLink() {
    return $('a[href="/use-cases/customer-notifications-system"]');
  }
  get filter() {
    return $("[aria-haspopup='menu'].c-hvmQSv");
  }
  get filterOption() {
    return $("[name='Travel-and-hospitality']");
  }
  get filterText() {
    return $("[aria-haspopup='menu'].c-hvmQSv");
  }
  get searchField() {
    return $("#search");
  }
  get selectedSearchOption() {
    return $("h3*=Cloud IVR");
  }
  get selectedSearchOptionTitle() {
    return $("//*[@id='use-cases']/div/div[3]/ul/li/div/div[2]/h3");
  }

  solutionsPageVisit() {
    return browser.url("/solutions");
  }
  async useCasesButtonClick() {
    await this.useCasesButton.click();
  }
  async filterButtonClick() {
    await this.filterButton.click();
  }
  async travelFilterSelected() {
    await this.travelFilter.click();
  }
  async closeFilter() {
    await this.closeFilterIcon.click();
  }
  async accountNotificationsClick() {
    await this.accountNotificationsLink.click();
  }
  async openFilter() {
    await this.filter.click();
  }
  async chooseFilterOption() {
    await this.filterOption.click();
  }
}

export default SolutionsPage;
