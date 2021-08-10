import { Selector, t} from 'testcafe';

export interface DashboardInterface {
	clickLogin: () => Promise<any>;
	clickSignUp: () => Promise<any>;
}

export class Dashboard implements DashboardInterface {
	public readonly signUp = Selector('#signin2');
	public readonly signIn = Selector('#login2');
	public readonly cart = Selector('#cartur');
	public readonly aboutUs = Selector('[data-target=#videoModal]');
	public readonly contact = Selector('[data-target=#exampleModal]');

	public async clickLogin(): Promise<any> {
		await t.click(this.signIn);
	}

	public async clickSignUp(): Promise<any> {
		await t.click(this.signUp);
	}
}

export default new Dashboard();
