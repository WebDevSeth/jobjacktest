import { Selector } from 'testcafe';

const signUp = Selector(".sign-up-in-link");
const firstName = Selector('[formcontrolname="firstName"]');
const lastName = Selector('[formcontrolname="lastName"]');
const mobile = Selector('[formcontrolname="phoneNumber"]');
const whatsapp = Selector('[formcontrolname="hasWhatsapp"]');
const dropdownOption = Selector(".ng-option-marked");
const whatsappNoti = Selector('[formcontrolname="whatsappOptIn"]');
const email = Selector('[formcontrolname="email"]');
const location = Selector(".location");
const password = Selector('[formcontrolname="password"]');
const whereDidYou = Selector('[formcontrolname="jobJackHow"]');
const registerButton = Selector('[type="submit"]');

fixture`Getting Started`
    .page`https://app.jobjack.co.za`;

test('My first test', async t => {
    await t
        .click(signUp)
        .typeText(firstName,"Seth")
        .typeText(lastName,"Kleynhans")
        .typeText(mobile,"735269695")
        .click(whatsapp)
        .click(dropdownOption)
        .click(whatsappNoti)
        .click(dropdownOption)
        .typeText(email,"littlezethstar4@gmail.com")
        .typeText(location,"Heathfield")
        await t.expect(Selector(".ng-spinner-loader").exists).notOk()
        .click(dropdownOption)
        .typeText(password,"Zagga444!")
        .click(whereDidYou)
        .click(dropdownOption)
        .click(registerButton)
        



        // Use the assertion to check if the actual header text is equal to the expected one
        .expect(Selector('body > app-root > app-layout-2 > div.layout-2 > div > div > div > div > app-home > div > app-jack-job-list > div.demo-vertical-spacing.pb-4 > ul > li:nth-child(1) > a').innerText).eql('Entry-Level Jobs');
});