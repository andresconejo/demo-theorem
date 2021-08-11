import { BaseURL, LoginCredentials, VerificationMessages } from '../helpers/demoConstants';
import checkout from '../page-objects/checkout';
import dashboard from '../page-objects/dashboard';
import itemDetails from '../page-objects/itemDetails';
import login from '../page-objects/login';
import shoppingCart from '../page-objects/shoppingCart';

// eslint-disable-next-line no-unused-expressions
fixture('Checkout').beforeEach(async (t) => {
	await t.navigateTo(BaseURL.BASE_URL);
});

test.meta('category','checkout')(
	'Checkout with valid item',
	async (t) => {
		await dashboard.openFirstItem();
		await itemDetails.addItemToCart();
		await dashboard.clickCart();
		await shoppingCart.clickPlaceOrder();
		await checkout.fillCheckoutForm();
		await checkout.clickPurchaseButton();
		await t
			.expect(checkout.okButton.visible).ok()
			.expect(checkout.purchaseConfirmationModal.innerText).eql(VerificationMessages.PURCHASE_MESSAGE_ACK);
	}
);

test.meta('category','checkout')(
	'Checkout with valid item logged user',
	async (t) => {
		await login.loginWithCredentials(LoginCredentials.VALID_USERNAME, LoginCredentials.VALID_PASSWORD);
		await dashboard.openFirstItem();
		await itemDetails.addItemToCart();
		await dashboard.clickCart();
		await shoppingCart.clickPlaceOrder();
		await checkout.fillCheckoutForm();
		await checkout.clickPurchaseButton();
		await t
			.expect(checkout.okButton.visible).ok()
			.expect(checkout.purchaseConfirmationModal.innerText).eql(VerificationMessages.PURCHASE_MESSAGE_ACK);
	}
);

