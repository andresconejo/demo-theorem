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

	public async verifyEachItemsDetails(): Promise<any> {
		const defaultCount = await dashboard.itemsContainer.childNodeCount - 1;
		for (let i = 0; i < defaultCount; i++) {
			await t.expect(dashboard.itemsContainer.child(defaultCount -1).visible).ok(); 
			const currentItemLink = await Selector('#tbodyid').child(i).child(0).child(0);
			await t.click(currentItemLink);
			await t.expect(this.itemName.visible).ok();
			await t.expect(this.itemName.innerText).notEql('');
			await t.expect(this.itemPrice.visible).ok();
			await t.expect(this.itemPrice.innerText).notEql('');
			await t.expect(this.itemContent.visible).ok();
			await t.expect(this.itemContent.innerText).notEql('');
			await dashboard.clickHome();
		}
	}

	public async addItemToCart(): Promise<any> {
		await t.setNativeDialogHandler(() => true).click(this.addToCart);
		return (await this.itemPrice.innerText).replace(/\D/g,'');
	}
}

export default new ItemDetails();
