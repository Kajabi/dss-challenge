import { Component, Prop, h, EventEmitter } from '@stencil/core';

type KajabiEvent = {
  detail: string;
  value: string;
};

@Component({
  tag: 'app-button',
  styleUrl: 'app-button.css',
  shadow: true,
})
export class AppButton {
  @Prop() kajabiClick: (event: KajabiEvent) => void;
  @Prop() variant: 'primary' | 'secondary' = 'primary';
  @Event() kajabiClick: EventEmitter<KajabiEvent>;

  private className() {
    const baseClass = 'button';
    return this.variant === 'primary' ? `${baseClass} button--primary` : `${baseClass} button--secondary`;
  }

  render() {
    return (
      <button
        class={this.className()}
        onClick={() =>
          this.kajabiClick({
            detail: 'This is a custom event',
            value: 'This is a custom value',
          })
        }
      >
        <slot></slot>
      </button>
    );
  }
}
