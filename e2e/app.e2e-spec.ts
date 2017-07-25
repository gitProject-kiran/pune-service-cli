import { PuneServiceCliPage } from './app.po';

describe('pune-service-cli App', () => {
  let page: PuneServiceCliPage;

  beforeEach(() => {
    page = new PuneServiceCliPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
