import { newE2EPage } from '@stencil/core/testing';

describe('app-button component', () => {
  it('should render successfully', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-button></app-button>');

    const element = await page.find('app-button');
    expect(element).toHaveClass('hydrated');
  });

  it('should apply primary variant class', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-button variant="primary"></app-button>');

    const element = await page.find('app-button');
    // / Ensures component is rendered
    expect(element).toHaveClass('hydrated');

    // Find the shadow DOM button element
    const button = await page.find('app-button >>> button');

    // Check if the button inside shadow DOM has the class `btn-primary`
    expect(button).toHaveClass('btn-primary');
  });
});
