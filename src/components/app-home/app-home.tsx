import { Component, Prop, h } from '@stencil/core';
import { Router } from '../../';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true,
})
export class AppHome {
  @Prop() myLocation: string;

  render() {
    return (
      <div class="app-home">
        <p>
          Welcome to the Stencil App Starter. You can use this starter to build entire apps all with web components using Stencil! Check out our docs on{' '}
          <a href="https://stenciljs.com">stenciljs.com</a> to get started.
        </p>
        <app-button
          variant="secondary"
          kajabiClick={event => {
            console.log(event);
          }}
        >
          Profile Page
        </app-button>
        {/* <button onClick={() => Router.push('/profile/stencil')}>Profile Page</button> */}
        {this.myLocation}
      </div>
    );
  }
}
