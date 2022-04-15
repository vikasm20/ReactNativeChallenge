describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('Is List Screen Visible', async () => {
    await expect(element(by.id('listScreen'))).toBeVisible();
  });

  it('Is Search Input Visible', async () => {
    await expect(element(by.id('searchInput'))).toBeVisible();
  });

  it('Type in Search Input', async () => {
    await element(by.id('searchInput')).typeText('High');
  });

  it('Clear Search Input', async () => {
    await element(by.id('searchInput')).clearText();
  });

});
