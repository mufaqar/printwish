import { gql } from "@apollo/client";

export const GET_PRODUCT = gql`
    query GetProducts($id: ID!) {
      product(id: $id, idType: SLUG) {
        title
        id
        slug
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
        galleryImages {
          nodes {
            mediaItemUrl
          }
        }
        ... on SimpleProduct {
          price
          galleryImages {
            nodes {
              mediaItemUrl
            }
          }
        }
        allPaColor {
          nodes {
            name
            description
          }
        }
        allPaSizes(where: {order: DESC}) {
          nodes {
            name
          }
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