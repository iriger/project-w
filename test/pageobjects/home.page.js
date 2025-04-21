import { $ } from '@wdio/globals'
// import Page from './page.js';



 class HomePage {

    get pricingLink() {
       return $("a > .c-ghTrAK > .c-swQxl");
     }
     get productsLink() {
       return $("#main-menu-content > button:first");
     }
     get productsButton() {
       return $("#main-menu-content > button:first > .c-swQxl");
     }
     get productsModal() {
       return $(".c-jLWzSx");
     }
     get solutionsButton() {
       return $("#main-menu-content > button").eq(1);
     }
     get solutionsModal() {
       return $(".c-jLWzSx");
     }
     get allSolutionsLink() {
       return cy.xpath("//p[normalize-space()='See all solutions']");
     }
   
    //  async visitHomePage() {
    //    cy.visit("/");
    //  }


    async openHomePage() {
        await browser.url("/");
      }

     async navigateToPricingPage() {
       await this.pricingLink.click();
     }
     async productsLinkClick() {
       await this.productsLink.click();
     }
     async solutionsButtonClick() {
       await this.solutionsButton.click();
     }
     async allSolutionsLinkClick() {
       await this.allSolutionsLink.click();
     }
   }
   
   export default new HomePage();





// /**
//  * sub page containing specific selectors and methods for a specific page
//  */
// class LoginPage extends Page {
//     /**
//      * define selectors using getter methods
//      */
//     get inputUsername () {
//         return $('#username');
//     }

//     get inputPassword () {
//         return $('#password');
//     }

//     get btnSubmit () {
//         return $('button[type="submit"]');
//     }

//     /**
//      * a method to encapsule automation code to interact with the page
//      * e.g. to login using username and password
//      */
//     async login (username, password) {
//         await this.inputUsername.setValue(username);
//         await this.inputPassword.setValue(password);
//         await this.btnSubmit.click();
//     }

//     /**
//      * overwrite specific options to adapt it to page object
//      */
//     open () {
//         return super.open('login');
//     }
// }

// export default new LoginPage();
