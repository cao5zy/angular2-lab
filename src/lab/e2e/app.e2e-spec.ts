import { LabPage } from './app.po';

describe('lab App', function() {
  let page: LabPage;

  beforeEach(() => {
    page = new LabPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
