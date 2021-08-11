import { BaseURL, LoginCredentials } from '../helpers/demoConstants';
import dashboard from '../page-objects/dashboard';
import itemDetails from '../page-objects/itemDetails';
import login from '../page-objects/login';
import shoppingCart from '../page-objects/shoppingCart';

// eslint-disable-next-line no-unused-expressions
fixture('Shopping Cart').beforeEach(async (t) => {
	await t.navigateTo(BaseURL.BASE_URL);
});

test.meta('category','shoppingCart')(
	'Add item to cart logged in user',
	async (t) => {
		await login.loginWithCredentials(LoginCredentials.VALID_USERNAME, LoginCredentials.VALID_PASSWORD);
		await dashboard.openFirstItem();
		const itemTotal = await itemDetails.addItemToCart();
		const cartEntries = await shoppingCart.getNumberCartEntries();
		const cartTotal = await shoppingCart.cartTotal.innerText;
		await t
			.expect(cartEntries).eql(1)
			.expect(itemTotal).eql(cartTotal);
	}
);

test.meta('category','shoppingCart')(
	'Add single item to cart',
	async (t) => {
		await dashboard.openFirstItem();
		const itemTotal = await itemDetails.addItemToCart();
		const cartEntries = await shoppingCart.getNumberCartEntries();
		const cartTotal = await shoppingCart.cartTotal.innerText;
		await t
			.expect(cartEntries).eql(1)
			.expect(itemTotal).eql(cartTotal);
	}
);

test.meta('category','shoppingCart')(
	'Add multiple items to cart',
	async (t) => {
		await dashboard.openFirstItem();
		const firstItemTotal = await itemDetails.addItemToCart();
		await dashboard.clickHome();
		await dashboard.openSecondItem();
		const secondItemTotal = await itemDetails.addItemToCart();
		const itemTotal = parseInt(firstItemTotal) + parseInt(secondItemTotal);
		const cartEntries = await shoppingCart.getNumberCartEntries();
		const cartTotal = await shoppingCart.cartTotal.innerText;
		await t
			.expect(cartEntries).eql(2)
			.expect(itemTotal).eql(parseInt(cartTotal));
	}
);

test.meta('category','shoppingCart')(
	'Delete item in cart',
	async (t) => {
		await dashboard.openFirstItem();
		const itemTotal = await itemDetails.addItemToCart();
		const cartEntries = await shoppingCart.getNumberCartEntries();
		const cartTotal = await shoppingCart.cartTotal.innerText;
		await t
			.expect(cartEntries).eql(1)
			.expect(itemTotal).eql(cartTotal);
		await shoppingCart.deleteFirstItem();
		await t.expect(shoppingCart.cartTotal.visible).notOk();
	}
);

