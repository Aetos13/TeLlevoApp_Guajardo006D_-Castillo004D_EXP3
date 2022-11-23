import { AppPage } from './app.po';
import { async } from 'rxjs';

describe('new App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('Prueba 1', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toContain('Start with Ionic UI Components');
  });

  it('Prueba 2', () =>{ 
    page.navigateTo();
    expect(page.getTittleText()).toContain('Bienvenido a TellevoApp');

  });

  it('Prueba 3', async () => {
    await page.navigateTo();
     expect(await page.getTitleTextH2()).toEqual('Hola Mundo');
   });

   it('Prueba 4', async () => {
    await page.navigateTo();
     expect(await page.getTitlePar()).toEqual('Hola como estas?');
   });


});
