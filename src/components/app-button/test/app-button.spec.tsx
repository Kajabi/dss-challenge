import { newSpecPage } from '@stencil/core/testing';
import { AppButton } from '../app-button';

describe('app-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AppButton],
      html: `<app-button></app-button>`,
    });
    expect(page.root).toEqualHtml(`
      <app-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </app-button>
    `);
  });

  it('uses secondary class', async () => {
    const page = await newSpecPage({
      components: [AppButton],
      html: '<app-button variant="secondary">Hello World</app-button>'
    })

    expect(page.root).toEqualHtml(`
      <app-button variant="secondary">
        <mock:shadow-root>
          <button class="button secondary">
            <slot></slot>
          </button>
        </mock:shadow-root>
        Hello World
      </app-button>
  `);
  });
});
