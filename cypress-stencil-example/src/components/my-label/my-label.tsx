import { Component, Host, Prop, h } from '@stencil/core';

export type LabelSize = 'xs' | 'small' | 'medium' | 'large';
@Component({ tag: 'my-label', styleUrl: './my-button.css' })
export class LabelComponent {
  @Prop()
  size?: LabelSize = 'large';

  render() {
    return (
      <Host>
        <div>This label is a Stencil component.</div>
      </Host>
    );
  }
}
