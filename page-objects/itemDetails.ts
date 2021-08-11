import { Selector, t} from 'testcafe';
import dashboard from './dashboard';

export interface ItemDetailsInterface {
	verifyEachItemsDetails: () => Promise<any>;
	addItemToCart: () => Promise<any>;
}

export class ItemDetails implements ItemDetailsInterface {

	public readonly itemName = Selector('#tbodyid').child('[class="name"]');
	public readonly itemPrice = Selector('#tbodyid').child('[class="price-container"]');
	public readonly itemContent = Selector('#myTabContent');
	public readonly addToCart = Selector('a').withText('Add to cart');

	/**
   * Loops around each item in the dashboard and checks it has proper item details when expanded
   */
	public async verifyEachItemsDetails(): Promise<any> {
		const defaultCount = await dashboard.itemsContainer.childNodeCount - 1;
		for (let i = 0; i < defaultCount; i++) {
			await t.expect(dashboard.itemsContainer.child(defaultCount -1).visible).ok(); 
			const currentItemLink = await Selector('#tbodyid').child(i).child(0).child(0);
			await t
				.click(currentItemLink)
				.expect(this.itemName.visible).ok()
				.expect(this.itemName.innerText).notEql('')
				.expect(this.itemPrice.visible).ok()
				.expect(this.itemPrice.innerText).notEql('')
				.expect(this.itemContent.visible).ok()
				.expect(this.itemContent.innerText).notEql('');
			await dashboard.clickHome();
		}
	}

	/**
   * Adds item to cart from within any item details page
   * @returns The numeric value of the item total
   */
	public async addItemToCart(): Promise<any> {
		await t.setNativeDialogHandler(() => true).click(this.addToCart);
		return (await this.itemPrice.innerText).replace(/\D/g,'');
	}
}

export default new ItemDetails();
