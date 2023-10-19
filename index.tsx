import { getContainerEl, setupHooks } from "@cypress/mount-utils";
import { transpileSync } from "@stencil/core/compiler";

let dispose: () => void;

function cleanup() {
  dispose?.();
}

interface MountingOptions {
  log?: boolean;
}

export function mount(
  component: Parameters<typeof String>[0],
  options: MountingOptions = {}
) {
  // rendering/mounting function.
  const root = getContainerEl();

  // Render component with your library's relevant
  const compiled = transpileSync(component);
  const toMount = document.createElement(compiled.code);
  root.appendChild(toMount);
  dispose = () => {};

  return cy.wait(0, { log: false }).then(() => {
    if (options.log !== false) {
      Cypress.log({
        name: "mount",
        message: "Mounted component",
      });
    }
  });
}

setupHooks(cleanup);
