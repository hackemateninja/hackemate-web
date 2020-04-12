import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import {GithubService} from './services/github.service';
import {EmailService} from './services/email.service';
import {YoutubeService} from './services/youtube.service';
import {GhostService} from './services/ghost.service';
import {RouterModule} from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { ContainerLeftComponent } from './container-left/container-left.component';
import { ContainerRightComponent } from './container-right/container-right.component';

const components = [
  NavbarComponent,
  ContainerComponent,
  ContainerLeftComponent,
  ContainerRightComponent,
  ContainerRightComponent
];

const providers = [
  GithubService,
  EmailService,
  YoutubeService,
  GhostService
];

const modules = [CommonModule, RouterModule];

@NgModule({
  declarations: [...components],
  providers: [...providers],
  exports: [...components, modules],
  imports: [...modules]
})
export class SharedModule { }
