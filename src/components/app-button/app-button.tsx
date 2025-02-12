import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'app-button',
  styleUrl: 'app-button.css',
  shadow: true,
})
export class AppButton {
  @Prop() label: string;
  @Prop() variant: "primary" | "secondary";

  render() {
    return <button class={this.variant}>{this.label}</button>;
  }
}