import { t, Selector } from 'testcafe';
import dashboard from './dashboard';

export interface ContactUsInterface {
	sendMessage: (email: string, name: string, message: string) => Promise<any>;
	typeEmailInTextbox: (email: string) => Promise<any>;
	typeNameInTextbox: (name: string) => Promise<any>;
	typeMessageInTextbox: (message: string) => Promise<any>;
	clickSendMessageWithDialogHandler: () => Promise<any>;
}

export class ContactUs implements ContactUsInterface {
	public readonly contactUsEmail = Selector('#recipient-email');
	public readonly contactUsName = Selector('#recipient-name');
	public readonly contactUsMessage = Selector('#message-text');
	public readonly closeButton = Selector('button').withText('Close');
	public readonly sendMessageButton = Selector('button').withText('Send message');

	public async sendMessage(email: string, name: string, message: string): Promise<any> {
		await t.click(dashboard.contact);
		await t.typeText(this.contactUsEmail, email).typeText(this.contactUsName, name).typeText(this.contactUsMessage, message);
		await t.setNativeDialogHandler(() => true).click(this.sendMessageButton);
	}

	public async typeEmailInTextbox(email: string): Promise<any> {
		await t.typeText(this.contactUsEmail, email);
	}

	public async typeNameInTextbox(name: string): Promise<any> {
		await t.typeText(this.contactUsName, name);
	}

	public async typeMessageInTextbox(message: string): Promise<any> {
		await t.typeText(this.contactUsMessage, message);
	}

	public async clickSendMessageWithDialogHandler(): Promise<any> {
		await t.setNativeDialogHandler(() => true).click(this.sendMessageButton);
	}
}

export default new ContactUs();
