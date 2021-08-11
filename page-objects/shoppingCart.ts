import { t, Selector } from 'testcafe';
import dashboard from './dashboard';

export interface ShoppingCartInterface {
	getNumberCartEntries: () => Promise<any>;
	deleteFirstItem: () => Promise<any>;

}
export class ShoppingCart implements ShoppingCartInterface {
	public readonly cartTable = Selector('#tbodyid');
	public readonly cartTotal = Selector('#totalp');
	public readonly deleteFirstItemLink = Selector('a').withText('Delete');


	public async getNumberCartEntries(): Promise<any> {
		await dashboard.clickCart();
		await t.expect(this.cartTable.visible).ok();
		return await this.cartTable.childElementCount;
	}

	public async deleteFirstItem(): Promise<any> {
		await t.click(this.deleteFirstItemLink);
	}
}

export default new ShoppingCart();
