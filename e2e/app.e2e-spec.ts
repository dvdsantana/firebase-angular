import { AngularFireBlogPage } from './app.po';

describe('angular-fire-blog App', () => {
  let page: AngularFireBlogPage;

  beforeEach(() => {
    page = new AngularFireBlogPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
