// eslint-disable-next-line import/no-extraneous-dependencies
import { createServer } from 'miragejs';

const nikeBrandIcon = require('./assets/icons/nike.png');
const adidasBrandIcon = require('./assets/icons/adidas.png');
const pumaBrandIcon = require('./assets/icons/puma.png');
const jordanBrandIcon = require('./assets/icons/jordan.png');
const asicsBrandIcon = require('./assets/icons/asics.png');
const newBalanceBrandIcon = require('./assets/icons/new-balance.png');

const BRANDS = {
  1: nikeBrandIcon,
  2: adidasBrandIcon,
  3: pumaBrandIcon,
  4: jordanBrandIcon,
  5: asicsBrandIcon,
  6: newBalanceBrandIcon,
};

const PRODUCT_TITTLES = [
  'Nike',
  'Adidas',
  'Puma',
  'Jordan',
  'Asics',
  'New Balance',
  'Test',
  'Hello',
  'Air Force 1',
];

const DEFAULT_PRODUCTS_BY_BRAND_COUNT = 15;

export function createSneakersServer() {
  if (window.server) {
    window.server.shutdown();
  }

  window.server = createServer({
    routes() {
      this.get('/api/brands', () => {
        setTimeout(() => {}, 10000);
        const entities = {};
        Object.entries(BRANDS).forEach(([key, value]) => {
          entities[key] = {
            id: key,
            icon: value,
          };
        });
        return {
          ids: Object.keys(BRANDS).map((id) => id.toString()),
          entities,
        };
      });
      this.get('/api/products', (_, request) => {
        const brandId = request.queryParams.brand;
        const ids = [];
        const entities = {};
        for (let i = 1; i <= DEFAULT_PRODUCTS_BY_BRAND_COUNT; i++) {
          ids.push(i.toString());
          entities[i] = {
            id: i.toString(),
            title: PRODUCT_TITTLES[Math.floor(Math.random() * PRODUCT_TITTLES.length)],
            price: Math.floor(Math.random() * 90) + 10,
            image: BRANDS[brandId],
          };
        }
        setTimeout(() => {}, 10000);
        return {
          ids,
          entities,
        };
      });
      this.get('/api/products/search', (_, request) => {
        const { searchValue, range } = request.queryParams;
        setTimeout(() => {}, 10000);
        return PRODUCT_TITTLES.filter((title) => title.toLowerCase().includes(searchValue))
          .map((value, index) => ({ id: index.toString(), title: value }))
          .slice(0, range);
      });
    },
  });
}
