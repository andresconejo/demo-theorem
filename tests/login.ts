import login from '../page-objects/login';
import { BaseURL, LoginCredentials, VerificationMessages } from '../helpers/demoConstants';
import dashboard from '../page-objects/dashboard';

// eslint-disable-next-line no-unused-expressions
fixture('Login').beforeEach(async (t) => {
	await t.navigateTo(BaseURL.BASE_URL);
});

test.meta('category','login')(
	'Login with Valid Credentials',
	async (t) => {
		await login.loginWithCredentials(LoginCredentials.VALID_USERNAME, LoginCredentials.VALID_PASSWORD);
		await t.expect(login.nameOfUser.innerText).eql(`Welcome ${LoginCredentials.VALID_USERNAME}`);
	}
);

test.meta('category','login')(
	'Login with Invalid Credentials',
	async (t) => {
		await login.loginWithInvalidCredentials(LoginCredentials.VALID_USERNAME, LoginCredentials.INVALID_PASSWORD);
		const modalError = await t.getNativeDialogHistory();
		await t
			.expect(modalError[0].type).eql('alert')
			.expect(modalError[0].text).eql(VerificationMessages.WRONG_PASSWORD);
	}
);

test.meta('category','login')(
	'Login with unknown user',
	async (t) => {
		await login.loginWithInvalidCredentials(LoginCredentials.INVALID_USERNAME, LoginCredentials.VALID_PASSWORD);
		const modalError = await t.getNativeDialogHistory();
		await t
			.expect(modalError[0].type).eql('alert')
			.expect(modalError[0].text).eql(VerificationMessages.USER_DOES_NOT_EXIST);
	}
);

test.meta('category','login')(
	'Login with empty password',
	async (t) => {
		await dashboard.clickLogin();
		await login.typeUsernameInTextbox(LoginCredentials.VALID_USERNAME);
		await login.clickLoginWithDialogHandler();
		const modalError = await t.getNativeDialogHistory();
		await t
			.expect(modalError[0].type).eql('alert')
			.expect(modalError[0].text).eql(VerificationMessages.EMPTY_USERNAME_PASSWORD);
	}
);

test.meta('category','login')(
	'Login with empty username',
	async (t) => {
		await dashboard.clickLogin();
		await login.typePasswordInTextbox(LoginCredentials.VALID_PASSWORD);
		await login.clickLoginWithDialogHandler();
		const modalError = await t.getNativeDialogHistory();
		await t
			.expect(modalError[0].type).eql('alert')
			.expect(modalError[0].text).eql(VerificationMessages.EMPTY_USERNAME_PASSWORD);
	}
);