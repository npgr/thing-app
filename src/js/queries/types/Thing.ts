/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Thing
// ====================================================

export interface Thing_thing_creator {
  __typename: "Creator";
  id: number | null;
  name: string | null;
}

export interface Thing_thing_default_image {
  __typename: "Image";
  url: string | null;
}

export interface Thing_thing {
  __typename: "Thing";
  id: number | null;
  name: string | null;
  creator: Thing_thing_creator | null;
  license: string | null;
  description: string | null;
  added: string | null;
  modified: string | null;
  default_image: Thing_thing_default_image | null;
}

export interface Thing {
  thing: Thing_thing | null;
}

export interface ThingVariables {
  id?: number | null;
}
