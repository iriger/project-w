import { $ } from "@wdio/globals";

class NotificationsPage {
  get notificationsTitle() {
    return $(".c-iOVFXp > .c-PJLV");
  }
  get productsSection() {
    return $("//*/section[4]");
  }
  get seeAllProductsLink() {
    return $(".c-dmhOoQ");
  }
  get productsTitle() {
    return $("//*/section[1]");
  }

  async seeAllProductsClick() {
    await this.seeAllProductsLink.click();
  }
}

export default NotificationsPage;
