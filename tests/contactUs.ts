import { BaseURL, ContactUsConstants, VerificationMessages } from '../helpers/demoConstants';
import dashboard from '../page-objects/dashboard';
import contactUs from '../page-objects/contactUs';

// eslint-disable-next-line no-unused-expressions
fixture('Contact').beforeEach(async (t) => {
	await t.navigateTo(BaseURL.BASE_URL);
});

test.meta('category','contactUs')(
	'Send message with all information filled',
	async (t) => {
		await contactUs.sendMessage(ContactUsConstants.VALID_EMAIL, ContactUsConstants.VALID_NAME, ContactUsConstants.VALID_MESSAGE);
		const modalError = await t.getNativeDialogHistory();
		await t.expect(modalError[0].type).eql('alert');
		await t.expect(modalError[0].text).eql(VerificationMessages.SEND_MESSAGE_ACK);
	}
);

test.meta('category','contactUs')(
	'Send message with email missing',
	async (t) => {
		await dashboard.clickContact();
		await contactUs.typeNameInTextbox(ContactUsConstants.VALID_NAME);
		await contactUs.typeMessageInTextbox(ContactUsConstants.VALID_MESSAGE);
		await contactUs.clickSendMessageWithDialogHandler();
		const modalError = await t.getNativeDialogHistory();
		await t.expect(modalError[0].type).eql('alert');
		await t.expect(modalError[0].text).eql(VerificationMessages.SEND_MESSAGE_ACK);
	}
);

test.meta('category','contactUs')(
	'Send message with name missing',
	async (t) => {
		await dashboard.clickContact();
		await contactUs.typeEmailInTextbox(ContactUsConstants.VALID_EMAIL);
		await contactUs.typeMessageInTextbox(ContactUsConstants.VALID_MESSAGE);
		await contactUs.clickSendMessageWithDialogHandler();
		const modalError = await t.getNativeDialogHistory();
		await t.expect(modalError[0].type).eql('alert');
		await t.expect(modalError[0].text).eql(VerificationMessages.SEND_MESSAGE_ACK);
	}
);

test.meta('category','contactUs')(
	'Send message with message missing',
	async (t) => {
		await dashboard.clickContact();
		await contactUs.typeEmailInTextbox(ContactUsConstants.VALID_EMAIL);
		await contactUs.typeNameInTextbox(ContactUsConstants.VALID_NAME);
		await contactUs.clickSendMessageWithDialogHandler();
		const modalError = await t.getNativeDialogHistory();
		await t.expect(modalError[0].type).eql('alert');
		await t.expect(modalError[0].text).eql(VerificationMessages.SEND_MESSAGE_ACK);
	}
);
