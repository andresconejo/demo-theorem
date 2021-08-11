import { Selector, t} from 'testcafe';

export interface DashboardInterface {
	clickLogin: () => Promise<any>;
	clickSignUp: () => Promise<any>;
	clickContact: () => Promise<any>;
	clickHome: () => Promise<any>;
	clickCart: () => Promise<any>;
	clickCategoryPhones: () => Promise<any>;
	clickCategoryLaptops: () => Promise<any>;
	clickCategoryMonitors: () => Promise<any>;
	verifyDetailsForEachItem: () => Promise<any>;
	openFirstItem: () => Promise<any>;
	openSecondItem: () => Promise<any>;
}

export class Dashboard implements DashboardInterface {
	public readonly signUp = Selector('#signin2');
	public readonly signIn = Selector('#login2');
	public readonly cart = Selector('#cartur');
	public readonly aboutUs = Selector('[data-target="#videoModal"]');
	public readonly contact = Selector('[data-target="#exampleModal"]');
	public readonly home = Selector('.nav-link').withAttribute('href', 'index.html');
	public readonly categoryPhones = Selector('#itemc').withText('Phones');
	public readonly categoryLaptops = Selector('#itemc').withText('Laptops');
	public readonly categoryMonitors = Selector('#itemc').withText('Monitors');
	public readonly itemsContainer = Selector('#tbodyid');
	public readonly firstItem = Selector('#tbodyid').child(0).child(0).child(0);
	public readonly secondItem = Selector('#tbodyid').child(1).child(0).child(0);

	public async clickLogin(): Promise<any> {
		await t.click(this.signIn);
	}

	public async clickSignUp(): Promise<any> {
		await t.click(this.signUp);
	}

	public async clickContact(): Promise<any> {
		await t.click(this.contact);
	}

	public async clickHome(): Promise<any> {
		await t.click(this.home);
	}

	public async clickCart(): Promise<any> {
		await t.click(this.cart);
	}

	public async clickCategoryPhones(): Promise<any> {
		await t.click(this.categoryPhones);
	}

	public async clickCategoryLaptops(): Promise<any> {
		await t.click(this.categoryLaptops);
	}

	public async clickCategoryMonitors(): Promise<any> {
		await t.click(this.categoryMonitors);
	}

	public async verifyDetailsForEachItem(): Promise<any> {
		const defaultCount = await this.itemsContainer.childNodeCount - 1;
		for (let i = 0; i < defaultCount; i++) {
			await t.expect(this.itemsContainer.child(defaultCount - 1).visible).ok();
			const currentItemLink = await Selector('#tbodyid').child(i).child(0).child(0).getAttribute('href');
			await t.expect(currentItemLink).notEql('');
			const currentItemDetails = await Selector('#tbodyid').child(i).child(0).child(1).innerText;
			await t.expect(currentItemDetails).notEql('');
		}
	}

	public async openFirstItem(): Promise<any> {
		await t.click(this.firstItem);
	}

	public async openSecondItem(): Promise<any> {
		await t.click(this.secondItem);
	}
}

export default new Dashboard();
