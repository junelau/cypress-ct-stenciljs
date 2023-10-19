import { defineComponentFramework } from "cypress";

const stencilDep: Cypress.CypressComponentDependency = {
  type: "@stencil/core",
  name: "StencilJS",
  package: "@stencil/core",
  installer: "@stencil/core",
  description:
    "A library for building reusable, scalable component libraries.",
  minVersion: "^3.0.0",
}

/**
 * The definition.
 */
export default defineComponentFramework({
  /**
   * This should match the `npm` package name.
   * The convention required to ensure your Definition is processed
   * by Cypress is `cypress-ct-*` for global packages, or
   * `@org/cypress-ct-*` for organization level packages.
   */
  type: "cypress-ct-stenciljs",
  name: "StencilJS",
  supportedBundlers: ["vite", "webpack"],

  /**
   * Used by Cypress to automatically detect the correct Framework Definition
   * based on the user's project.
   */
  detectors: [stencilDep],

  /* stencil is its own bundler. doesn't need either webpack or vite. 
  */
 dependencies: () => { return [stencilDep];}
});
