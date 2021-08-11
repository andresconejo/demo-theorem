import { BaseURL } from '../helpers/demoConstants';
import dashboard from '../page-objects/dashboard';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const categories = require('../data/categories.json');

// eslint-disable-next-line no-unused-expressions
fixture('Dashboard').beforeEach(async (t) => {
	await t.navigateTo(BaseURL.BASE_URL);
});

categories.forEach((data: { name: string }) => {
	test.meta('category','dashboard')(
		`Check category ${data.name} filters out results`,
		async () => {
			await dashboard.checkCategoryByCategoryName(data.name);
		});
});

test.meta('category','dashboard')(
	'Ensure items have corresponding details',
	async () => {
		await dashboard.verifyDetailsForEachItem();
	}
);
