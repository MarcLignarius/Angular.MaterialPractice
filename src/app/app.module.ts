import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { SelectPlayerComponent } from './select-player/select-player.component';
import { SelectTimeComponent } from './select-time/select-time.component';
import { GameRecapComponent } from './game-recap/game-recap.component';
import { FormsComponent } from './forms/forms.component';
import { MenusComponent } from './menus/menus.component';
import { HomeComponent } from './home/home.component';
import { MatSnackBarModule } from '@angular/material';
import { TriggerAnimationComponent } from './trigger-animation/trigger-animation.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginScreenComponent,
    SelectPlayerComponent,
    SelectTimeComponent,
    GameRecapComponent,
    FormsComponent,
    MenusComponent,
    HomeComponent,
    TriggerAnimationComponent,
  ],
  imports: [
    FormsModule,
    HttpModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatSnackBarModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
