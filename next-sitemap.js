const fs = require("fs");
const { ApolloClient, InMemoryCache, gql } = require("@apollo/client")

const BACKEND_SITE_URL = "https://backend.printwish.co.uk"
const FRONTEND_URI = "https://www.printwish.co.uk"

const client = new ApolloClient({
  uri: `${BACKEND_SITE_URL}/graphql`,
  cache: new InMemoryCache(),
});

// generate current data and time to given formate that required in sitemap 
const now = new Date();
const year = now.getFullYear();
const month = String(now.getMonth() + 1).padStart(2, '0');
const day = String(now.getDate()).padStart(2, '0');
const hours = String(now.getHours()).padStart(2, '0');
const minutes = String(now.getMinutes()).padStart(2, '0');
const seconds = String(now.getSeconds()).padStart(2, '0');
const formattedDateTime = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;

// generating sitemap here 
async function generateSitemap() {
  // Queries
  const ALL_LOCATIONS = gql`
    query locations {
      locations(first: 100, where: {orderby: {field: DATE, order: ASC}}) {
        nodes {
          slug
          date
          modifiedGmt
        }
      }
    }`;
  const ALL_CATEGORIES = gql`
    query productCategories {
      productCategories(first: 100) {
        nodes {
          slug
        }
      }
    }`;
  const ALL_PRODUCTS = gql`
    query products {
      products(first: 100) {
        nodes {
          date
          slug
          modified
        }
      }
    }`;

  const locationResponse = await client.query({
    query: ALL_LOCATIONS,
  });
  const categoriesResponse = await client.query({
    query: ALL_CATEGORIES,
  });
  const productsResponse = await client.query({
    query: ALL_PRODUCTS,
  });
  const location = locationResponse?.data?.locations.nodes;
  const categories = categoriesResponse?.data?.productCategories.nodes;
  const products = productsResponse?.data?.products.nodes;

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
          <loc>${FRONTEND_URI}</loc>
          <lastmod>${formattedDateTime}</lastmod>
          <priority>1.00</priority>
      </url>
      <url>
          <loc>${FRONTEND_URI}/cotton-bags-cheap-branded-tote-bags</loc>
          <lastmod>${formattedDateTime}</lastmod>
          <priority>1.00</priority>
      </url>
      <url>
          <loc>${FRONTEND_URI}/locations</loc>
          <lastmod>${formattedDateTime}</lastmod>
          <priority>1.00</priority>
      </url>
      <url>
          <loc>${FRONTEND_URI}/contact-us</loc>
          <lastmod>${formattedDateTime}</lastmod>
          <priority>1.00</priority>
      </url>
      <url>
          <loc>${FRONTEND_URI}/about</loc>
          <lastmod>${formattedDateTime}</lastmod>
          <priority>1.00</priority>
      </url>
      <url>
          <loc>${FRONTEND_URI}/delivery-information</loc>
          <lastmod>${formattedDateTime}</lastmod>
          <priority>1.00</priority>
      </url>
      <url>
          <loc>${FRONTEND_URI}/blog</loc>
          <lastmod>${formattedDateTime}</lastmod>
          <priority>1.00</priority>
      </url>
      ${location.map((item) => `<url>
          <loc>${FRONTEND_URI}/${item.slug}</loc>
          <lastmod>${item?.date || item?.modifiedGmt}</lastmod>
          <priority>0.80</priority>
        </url> `).join("")}
      ${categories.map((item) => `<url>
          <loc>${FRONTEND_URI}/${item.slug}</loc>
          <lastmod>${formattedDateTime}</lastmod>
          <priority>0.80</priority>
        </url>`).join("")}
      ${products.map((item) => `<url>
        <loc>${FRONTEND_URI}/product/${item.slug}</loc>
        <lastmod>${item.modified || item.date}</lastmod>
        <priority>0.80</priority>
       </url>`).join("")}
    </urlset>
  `;
  fs.writeFileSync("public/sitemap.xml", sitemap);
}

generateSitemap();










