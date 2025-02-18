import { Component, Host, Listen, Prop, h } from '@stencil/core';

@Component({
  tag: 'app-button',
  styleUrl: 'app-button.css',
  shadow: true,
})
export class AppButton {
  @Listen('click')
  handleClick() {
    console.log('fired!')
  }

  @Prop() variant: 'primary' | 'secondary' = 'primary'

  render() {
    return (
      <Host>
        <button class={`button ${this.variant}`}>
          testing
        </button>
      </Host>
    );
  }
}
