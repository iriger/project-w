import { expect } from '@wdio/globals'


// import LoginPage from '../pageobjects/login.page.js'
import HomePage from '../pageobjects/home.page.js';
import SecurePage from '../pageobjects/secure.page.js';
import PricingPage from '../pageobjects/pricing.page.js';

// describe('My Login application', () => {
//     it('should login with valid credentials', async () => {
//         await LoginPage.open()

// const homePage = new HomePage();
// const pricingPage = new PricingPage();

        describe("Testing Telnyx web-site", () => {
            // it("Test 1 - verify Pricing button in the header", async() => {
              
            //     await HomePage.openHomePage();
            // //  await HomePage.visitHomePage();
            //   await HomePage.navigateToPricingPage();
            //   await expect (PricingPage.pricingPageTitle).toHaveText("Pricing");
            //   await expect (PricingPage.pricingPageDescription).toHaveText(expect.stringContaining("Flexible, transparent"));
            // });

            it("Test 6 - Pricing page content", async() => {
                // HomePage.openHomePage();
                // HomePage.navigateToPricingPage();
                await PricingPage.visitPricingPage();
                // PricingPage
                //   .firstSection()
                //   .should("have.css", "background-color", "rgba(0, 227, 170, 0.95)");
                await expect (PricingPage.firstSectionTitle).toHaveText("PAY AS YOU GO");
                // PricingPage
                //   .secondSection()
                //   .should("have.css", "background-color", "rgb(254, 253, 245)");
                await expect (PricingPage
                  .secondSectionTitle).toHaveText("VOLUME-BASED PRICING");
              });

    //     await LoginPage.login('tomsmith', 'SuperSecretPassword!')
    //     await expect(SecurePage.flashAlert).toBeExisting()
    //     await expect(SecurePage.flashAlert).toHaveText(
    //         expect.stringContaining('You logged into a secure area!'))
    //     await expect(SecurePage.flashAlert).toMatchElementSnapshot('flashAlert')
    // })
})