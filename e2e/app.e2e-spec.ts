import { AppPage } from './app.po';

describe('angular-login-app App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Angular 5 Login Module');
  });
});
