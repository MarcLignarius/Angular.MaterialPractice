import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { SelectPlayerComponent } from './select-player/select-player.component';
import { SelectTimeComponent } from './select-time/select-time.component';
import { GameRecapComponent } from './game-recap/game-recap.component';
import { FormsComponent } from './forms/forms.component';
import { MenusComponent } from './menus/menus.component';
import { TriggerAnimationComponent } from './trigger-animation/trigger-animation.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'login-screen', component: LoginScreenComponent },
    { path: 'select-player', component: SelectPlayerComponent },
    { path: 'select-time', component: SelectTimeComponent },
    { path: 'game-recap', component: GameRecapComponent },
    { path: 'forms', component: FormsComponent },
    { path: 'menus', component: MenusComponent },
    { path: 'trigger-animation', component: TriggerAnimationComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);