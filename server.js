import { createServer } from 'miragejs';

const BRANDS = {
  1: require('./assets/icons/nike.png'),
  2: require('./assets/icons/adidas.png'),
  3: require('./assets/icons/puma.png'),
  4: require('./assets/icons/jordan.png'),
  5: require('./assets/icons/asics.png'),
  6: require('./assets/icons/new-balance.png'),
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
    server.shutdown();
  }

  window.server = createServer({
    routes() {
      this.get('/api/brands', () => {
        setTimeout(() => {}, 10000);
        let entities = {};
        for (const [key, value] of Object.entries(BRANDS)) {
          entities[key] = {
            id: key,
            icon: value,
          };
        }
        return {
          ids: Object.keys(BRANDS).map((id) => id.toString()),
          entities: entities,
        };
      });
      this.get('/api/products', (_, request) => {
        const brandId = request.queryParams.brand;
        let ids = [];
        let entities = {};
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
          ids: ids,
          entities: entities,
        };
      });
    },
  });
}
