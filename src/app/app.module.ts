import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

// Import AngularFireModule to inject Firebase providers.
import { AngularFireModule } from 'angularfire2';

// Must export the config
export const firebaseConfig = {
  apiKey: 'AIzaSyC17WXNYTlO0Cd3AoJhx7DKCE8yEN62cbs',
  authDomain: 'fireblog-2f698.firebaseapp.com',
  databaseURL: 'https://fireblog-2f698.firebaseio.com',
  storageBucket: 'fireblog-2f698.appspot.com',
  messagingSenderId: '991665738261'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
