/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: explore
// ====================================================

export interface explore_featured_creator {
  __typename: "Creator";
  name: string | null;
}

export interface explore_featured {
  __typename: "Thing";
  id: number | null;
  name: string | null;
  thumbnail: string | null;
  creator: explore_featured_creator | null;
}

export interface explore_newest_creator {
  __typename: "Creator";
  name: string | null;
}

export interface explore_newest {
  __typename: "Thing";
  id: number | null;
  name: string | null;
  thumbnail: string | null;
  creator: explore_newest_creator | null;
}

export interface explore_popular_creator {
  __typename: "Creator";
  name: string | null;
}

export interface explore_popular {
  __typename: "Thing";
  id: number | null;
  name: string | null;
  thumbnail: string | null;
  creator: explore_popular_creator | null;
}

export interface explore {
  validToken: boolean | null;
  featured: (explore_featured | null)[] | null;
  newest: (explore_newest | null)[] | null;
  popular: (explore_popular | null)[] | null;
}
