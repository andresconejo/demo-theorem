import { Selector, t} from 'testcafe';
import dashboard from './dashboard';

export interface AccountCreationInterface {
	signUpWithValidCredentials: (username: string, password: string) => Promise<any>;
	typeUsernameInTextbox: (username: string) => Promise<any>;
	typePasswordInTextbox: (password: string) => Promise<any>;
	clickSignUpWithDialogHandler: () => Promise<any>;
}

export class AccountCreation implements AccountCreationInterface {
	public readonly username = Selector('#sign-username');
	public readonly password = Selector('#sign-password');
	public readonly closeButton = Selector('button').withText('Close');
	public readonly singUpButton = Selector('button').withText('Sign up');

	/**
   * Clicks on signup from menu button, fills form and clicks on sign up
   * @param username - Unique username
   * @param password - Valid password
   */
	public async signUpWithValidCredentials(username: string, password: string): Promise<any> {
		await t.click(dashboard.signUp);
		await t
			.typeText(this.username, username)
			.typeText(this.password, password)
			.setNativeDialogHandler(() => true)
			.click(this.singUpButton);
	}

	public async typeUsernameInTextbox(username: string): Promise<any> {
		await t.typeText(this.username, username);
	}

	public async typePasswordInTextbox(password: string): Promise<any> {
		await t.typeText(this.password, password);
	}

	public async clickSignUpWithDialogHandler(): Promise<any> {
		await t.setNativeDialogHandler(() => true).click(this.singUpButton);
	}
}

export default new AccountCreation();

