import { TutorialsAppPage } from './app.po';

describe('tutorials-app App', () => {
  let page: TutorialsAppPage;

  beforeEach(() => {
    page = new TutorialsAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
