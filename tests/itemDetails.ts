import { BaseURL, VerificationMessages } from '../helpers/demoConstants';
import dashboard from '../page-objects/dashboard';
import itemDetails from '../page-objects/itemDetails';

// eslint-disable-next-line no-unused-expressions
fixture('Item Details').beforeEach(async (t) => {
	await t.navigateTo(BaseURL.BASE_URL);
});

test.meta('category','itemDetails')(
	'Each item has its corresponding details',
	async () => {
		await itemDetails.verifyEachItemsDetails();
	}
);

test.meta('category','itemDetails')(
	'Add item to cart',
	async (t) => {
		await dashboard.openFirstItem();
		await itemDetails.addItemToCart();
		const modalError = await t.getNativeDialogHistory();
		await t.expect(modalError[0].type).eql('alert');
		await t.expect(modalError[0].text).eql(VerificationMessages.PRODUCT_ADDED);
	}
);
