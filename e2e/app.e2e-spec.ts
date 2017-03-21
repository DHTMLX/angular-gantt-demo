import { GanttAngular2Page } from './app.po';

describe('gantt-angular2 App', () => {
  let page: GanttAngular2Page;

  beforeEach(() => {
    page = new GanttAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
