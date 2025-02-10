import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'app-button',
  styleUrl: 'app-button.css',
  shadow: true,
})
export class AppButton {
  @Prop() label: string
  @Prop() variant: 'primary' | 'secondary'
  render() {
    return (
      <Host>
        <button class={`btn-${this.variant}`}>
          <div class="button-content">
            {this.variant}
            <div>
              <slot name="label">{this.label}</slot>
            </div>
          </div>
        </button>
      </Host>
    );
  }
}
