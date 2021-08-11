import { BaseURL } from '../helpers/demoConstants';
import dashboard from '../page-objects/dashboard';

// eslint-disable-next-line no-unused-expressions
fixture('Dashboard').beforeEach(async (t) => {
	await t.navigateTo(BaseURL.BASE_URL);
});

test.meta('category','dashboard')(
	'Check phones category filters out results',
	async (t) => {
		const defaultCount = await dashboard.itemsContainer.childNodeCount - 1;
		await dashboard.clickCategoryPhones();
		const currentCount = await dashboard.itemsContainer.childNodeCount - 1;
		await t.expect(currentCount).lte(defaultCount);
	}
);

test.meta('category','dashboard')(
	'Check laptops category filters out results',
	async (t) => {
		const defaultCount = await dashboard.itemsContainer.childNodeCount - 1;
		await dashboard.clickCategoryLaptops();
		const currentCount = await dashboard.itemsContainer.childNodeCount - 1;
		await t.expect(currentCount).lte(defaultCount);
	}
);

test.meta('category','dashboard')(
	'Check monitors category filters out results',
	async (t) => {
		const defaultCount = await dashboard.itemsContainer.childNodeCount - 1;
		await dashboard.clickCategoryMonitors();
		const currentCount = await dashboard.itemsContainer.childNodeCount - 1;
		await t.expect(currentCount).lte(defaultCount);
	}
);

test.meta('category','dashboard')(
	'Ensure items have corresponding details',
	async () => {
		await dashboard.verifyDetailsForEachItem();
	}
);
