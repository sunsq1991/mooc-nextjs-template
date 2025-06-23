import Strapi from 'strapi-sdk-js';

// Create a Strapi client instance
const strapi = new Strapi({
  url: process.env.NEXT_PUBLIC_CMS_API_URL || 'http://localhost:1337',
});

// Export the strapi instance in case direct access is needed
export { strapi };
