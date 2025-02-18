import { Component, Event, EventEmitter, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'app-button',
  styleUrl: 'app-button.css',
  shadow: true,
})
export class AppButton {
  @Prop() variant: 'primary' | 'secondary' = 'primary'

  @Event() kajabiClick: EventEmitter;

  handleClick() {
    this.kajabiClick.emit();

    console.log('event fired');
  }

  render() {
    return (
      <Host>
        <button onClick={() => this.handleClick()} class={`button ${this.variant}`}>
          <slot></slot>
        </button>
      </Host>
    );
  }
}
