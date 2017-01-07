import { Angular241Page } from './app.po';

describe('angular241 App', function() {
  let page: Angular241Page;

  beforeEach(() => {
    page = new Angular241Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
