import { t, Selector } from 'testcafe';
import { PurchaseFormConstants } from '../helpers/demoConstants';

export interface CheckoutInterface {
	fillCheckoutForm: () => Promise<any>;
	clickPurchaseButton: () => Promise<any>;

}
export class Checkout implements CheckoutInterface {
	public readonly checkoutTotal = Selector('#totalm');
	public readonly nameTextbox = Selector('#name');
	public readonly countryTextbox = Selector('#country');
	public readonly cityTextbox = Selector('#city');
	public readonly cardTextbox = Selector('#card');
	public readonly monthTextbox = Selector('#month');
	public readonly yearTextbox = Selector('#year');
	public readonly closeButton = Selector('button').withText('Close');
	public readonly purchaseButton = Selector('button').withText('Purchase');
	public readonly purchaseConfirmationModal = Selector('.sweet-alert').child('h2');
	public readonly okButton = Selector('button').withText('OK');

	/**
   * Fills checkout form with valid data from constants file
   */
	public async fillCheckoutForm(): Promise<any> {
		await t
			.typeText(this.nameTextbox,PurchaseFormConstants.NAME)
			.typeText(this.countryTextbox, PurchaseFormConstants.COUNTRY)
			.typeText(this.cityTextbox, PurchaseFormConstants.CITY)
			.typeText(this.cardTextbox, PurchaseFormConstants.CARD)
			.typeText(this.monthTextbox, PurchaseFormConstants.MONTH)
			.typeText(this.yearTextbox, PurchaseFormConstants.YEAR);
	}

	public async clickPurchaseButton(): Promise<any> {
		await t.click(this.purchaseButton);
	}
}

export default new Checkout();
