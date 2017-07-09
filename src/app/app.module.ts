import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

// components
import { MyApp } from './app.component';
import { TabsPage } from './../pages/tabs/tabs';
import { LlamadasPage } from './../pages/tab-llamadas/llamadas';
import { MensajesPage } from './../pages/tab-mensajes/mensajes';
import { AudioPage } from './../pages/tab-audio/audio';
import { Pagina2Page } from './../pages/pagina2/pagina2';






@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    LlamadasPage,
    MensajesPage,
    AudioPage,
    Pagina2Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    LlamadasPage,
    MensajesPage,
    AudioPage,
    Pagina2Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
