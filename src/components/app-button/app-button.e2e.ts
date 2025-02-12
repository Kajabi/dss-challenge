it('variant being applied', async() => {
    const page = await newE2EPage();

    await page.setContent('<my-component variant="secondary"></my-component>');

    const button = await page.find('my-component');
    expect(button).toHaveClass('opaskdpoaskd')
  })