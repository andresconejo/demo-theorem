import accountCreation from '../page-objects/accountCreation';
import * as faker from 'faker';
import { BaseURL, LoginCredentials, VerificationMessages } from '../helpers/demoConstants';
import dashboard from '../page-objects/dashboard';
import login from '../page-objects/login';

// eslint-disable-next-line no-unused-expressions
fixture('Account Creation').beforeEach(async (t) => {
	await t.navigateTo(BaseURL.BASE_URL);
});

test.meta('category','accountCreation')(
	'Create new user',
	async (t) => {
		const randomUsername = faker.internet.userName();
		await accountCreation.signUpWithValidCredentials(randomUsername, LoginCredentials.VALID_PASSWORD);
		const modalError = await t.getNativeDialogHistory();
		await t
			.expect(modalError[0].type).eql('alert')
			.expect(modalError[0].text).eql(VerificationMessages.SIGN_UP_SUCCESSFUL);
	}
);

test.meta('category','accountCreation')(
	'Create new user with existing username',
	async (t) => {
		await accountCreation.signUpWithValidCredentials(LoginCredentials.VALID_USERNAME, LoginCredentials.VALID_PASSWORD);
		const modalError = await t.getNativeDialogHistory();
		await t
			.expect(modalError[0].type).eql('alert')
			.expect(modalError[0].text).eql(VerificationMessages.USER_ALREADY_EXISTS);
	}
);

test.meta('category','accountCreation')(
	'Create new user with empty password',
	async (t) => {
		await dashboard.clickSignUp();
		await accountCreation.typePasswordInTextbox(LoginCredentials.VALID_PASSWORD);
		await accountCreation.clickSignUpWithDialogHandler();
		const modalError = await t.getNativeDialogHistory();
		await t
			.expect(modalError[0].type).eql('alert')
			.expect(modalError[0].text).eql(VerificationMessages.EMPTY_USERNAME_PASSWORD);
	}
);

test.meta('category','accountCreation')(
	'Create new user with empty username',
	async (t) => {
		const randomUsername = faker.internet.userName();
		await dashboard.clickSignUp();
		await accountCreation.typeUsernameInTextbox(randomUsername);
		await accountCreation.clickSignUpWithDialogHandler();
		const modalError = await t.getNativeDialogHistory();
		await t
			.expect(modalError[0].type).eql('alert')
			.expect(modalError[0].text).eql(VerificationMessages.EMPTY_USERNAME_PASSWORD);
	}
);

test.meta('category','accountCreation')(
	'Newly created user can sign in successfully',
	async (t) => {
		const randomUsername = faker.internet.userName();
		await accountCreation.signUpWithValidCredentials(randomUsername, LoginCredentials.VALID_PASSWORD);
		const modalError = await t.getNativeDialogHistory();
		await t
			.expect(modalError[0].type).eql('alert')
			.expect(modalError[0].text).eql(VerificationMessages.SIGN_UP_SUCCESSFUL);
		await login.loginWithCredentials(randomUsername, LoginCredentials.VALID_PASSWORD);
		await t.expect(login.nameOfUser.innerText).eql(`Welcome ${randomUsername}`);
	}
);
