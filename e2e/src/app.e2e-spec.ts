import { AppPage } from './app.po';
// @ts-ignore
import { describe } from 'jasmine';
// @ts-ignore
import { expect } from 'jasmine';

describe('workspace-project App', () => {
  let page: AppPage;

  // @ts-ignore
  beforeEach(() => {
    page = new AppPage();
  });

  // @ts-ignore
  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to TK-blog-kol2!');
  });
});
