import { gql } from "@apollo/client";

export const GET_PRODUCT = gql`
    query GetProducts($id: ID!) {
      product(id: $id, idType: SLUG) {
        title
        id
        slug
        excerpt
        content
        sku
        featuredImage {
          node {
            mediaItemUrl
          }
        }
        productCategories {
          nodes {
            slug
            name
          }
        }
        shortDescription
        galleryImages(first: 100) {
          nodes {
            mediaItemUrl
            altText
          }
        }
        ... on SimpleProduct {
          price
          gallery : galleryImages {
            nodes {
              mediaItemUrl
            }
          }
        }
        allPaColor(first: 100) {
          nodes {
            name
            description
          }
        }
        allPaSizes(where: {orderby: TERM_ORDER}) {
          nodes {
            name
            description
          }
        }
        poductInfo {
          fabric
          gender
          imprintArea {
            back
            front
            leftbreast
          }
          imprintMethod
          minimumOrder
          packaging
          readyToShip
          washingInstructions
          weight
          whitelarge
          whitesmall
          colorsmall
          colorlarge
        }
      }
    }
  `;


export const SEARCH_PRODUCTS = gql`
  query GetProducts($category: String!, $search: String!) {
    products(where: {category: $category, search:  $search}) {
      nodes {
        title
        id
        slug
        featuredImage {
          node {
            mediaItemUrl
          }
        }
      }
    }
  }
  `;

export const SEARCH_PRODUCTS_WITHOUT_CAREGORY = gql`
  query GetProducts( $search: String!) {
    products(where: { search:  $search}) {
      nodes {
        title
        id
        slug
        featuredImage {
          node {
            mediaItemUrl
          }
        }
      }
    }
  }
  `;


export const LOCATION_PAGE = gql`
query GetLocation($slug: String!) {
  locationBy(uri: $slug) {
    title
    content
    excerpt
    locationinfo {
      faqs {
        answer
        question
      }
    }
  }
}
`;

export const ALL_LOCATIONS = gql`
query GetLocations {
  locations(first: 20, where: {orderby: {field: DATE, order: ASC}}) {
    nodes {
      title
      uri
      slug
    }
  }
}`;

export const GetGallery = gql`
query GetGallery {
  allGallery(first: 100) {
    nodes {
      image {
        image {
          mediaItemUrl
        }
      }
    }
  }
}`;

export const ALLBAGS = gql`
query ALLBAGS {
  bags {
    nodes {
      featuredImage {
        node {
          mediaItemUrl
        }
      }
      bagsInfo {
        price
      }
      title
      slug
    }
  }
}`;

export const SINGLEBAG = gql`
query SINGLEBAG($id: ID!) {
  bag(id: $id, idType: URI) {
    title
    bagsInfo {
      price
      capacity
      carryShoulderStrapsSize
      fieldGroupName
      leadTime
      material
      printArea
      printOptions
      productSize
      weight
    }
    featuredImage {
      node {
        mediaItemUrl
      }
    }
  }
}`;

export const GetProductByTag = gql`
query GetProductByTag($tag: ID = "") {
  productTag(id: $tag, idType: SLUG) {
    products {
      nodes {
        title
        slug
        featuredImage {
          node {
            mediaItemUrl
          }
        }
        ... on SimpleProduct {
          price
          gallery : galleryImages {
            nodes {
              mediaItemUrl
            }
          }
        }
        poductInfo {
          whitesmall
        }
        allPaColor(first: 100) {
          nodes {
            name
            description
          }
        }
      }
    }
  }
}`;