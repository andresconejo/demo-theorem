import { t, Selector } from 'testcafe';

export interface LoginInterface {
	loginWithCredentials: (username: string, password: string) => Promise<any>;
	loginWithInvalidCredentials: (username: string, password: string) => Promise<any>;
	typeUsernameInTextbox: (username: string) => Promise<any>;
	typePasswordInTextbox: (password: string) => Promise<any>;
	clickLoginWithDialogHandler: () => Promise<any>;
}

export class Login implements LoginInterface {
	public readonly loginMenuButton = Selector('#login2');
	public readonly usernameTextbox = Selector('#loginusername');
	public readonly passwordTextbox = Selector('#loginpassword');
	public readonly loginButton = Selector('button').withText('Log in');
	public readonly nameOfUser = Selector('#nameofuser');


	public async loginWithCredentials(username: string, password: string): Promise<any> {
		await t.click(this.loginMenuButton);
		await t.typeText(this.usernameTextbox, username).typeText(this.passwordTextbox, password).click(this.loginButton);
	}

	public async loginWithInvalidCredentials(username: string, password: string): Promise<any> {
		await t.click(this.loginMenuButton);
		await t.typeText(this.usernameTextbox, username).typeText(this.passwordTextbox, password);
		await t.setNativeDialogHandler(() => true).click(this.loginButton);
	}

	public async typeUsernameInTextbox(username: string): Promise<any> {
		await t.typeText(this.usernameTextbox, username);
	}

	public async typePasswordInTextbox(password: string): Promise<any> {
		await t.typeText(this.passwordTextbox, password);
	}

	public async clickLoginWithDialogHandler(): Promise<any> {
		await t.setNativeDialogHandler(() => true).click(this.loginButton);
	}
}

export default new Login();
