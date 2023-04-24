import { Browser } from './browser.js';
import  { Strategy } from './strategy.js';

class Bet365 extends Strategy {

    constructor() {
        super();
        this.browser = new Browser();
    }

    async _nameCompetition() {

        await this.browser.start()

        await this.browser.page.goto('https://www.bet365.com/#/IP/B1');
        await this.browser.page.waitForURL('https://www.bet365.com/#/IP/B1');
        await this.browser.page.waitForTimeout(5000);

        await this.browser.page.setViewportSize({width: 1080, height: 1024});

        await this.browser.page.locator('div .iip-IntroductoryPopup_Cross').click();

        await this.browser.page.waitForTimeout(5000)

        let listTeamOne = await this.browser.page.locator(".ovm-FixtureDetailsTwoWay_TeamsWrapper > div:nth-child(1)").allTextContents()
        let listTeamTwo = await this.browser.page.locator(".ovm-FixtureDetailsTwoWay_TeamsWrapper > div:nth-child(2)").allTextContents()

        let scoreTeamOne = await this.browser.page.locator("div .ovm-StandardScoresSoccer_TeamOne ").allTextContents()
        let scoreTeamTwo = await this.browser.page.locator("div .ovm-StandardScoresSoccer_TeamTwo ").allTextContents()

        return {
            listTeamOne,
            listTeamTwo,
            scoreTeamOne,
            scoreTeamTwo,
        }
    }

    _validacao(params) {
        let newString = '';
        if (params != undefined) {
            newString = params           
        }
        return newString
    }
    
    _obterDados(data, callback) {
        let newString = '';
        data.listTeamOne.forEach((e, i) => {
            const resposta = new Strategy(data.listTeamOne[i], data.listTeamTwo[i], data.scoreTeamOne[i], data.scoreTeamTwo[i])
            newString = newString.concat(this._validacao(callback.call(resposta)))
        });
        return newString
    }
}

export { Bet365 };