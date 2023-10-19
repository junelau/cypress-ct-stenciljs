import { LabelComponent } from './my-label';

describe('<my-label />', () => {
  it('renders', () => {
    cy.mount(LabelComponent);
    cy.get('label').contains('This label is a Stencil component.');
  });
});
