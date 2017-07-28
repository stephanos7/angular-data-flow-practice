import { AngularNestedComponentsPage } from './app.po';

describe('angular-nested-components App', () => {
  let page: AngularNestedComponentsPage;

  beforeEach(() => {
    page = new AngularNestedComponentsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
