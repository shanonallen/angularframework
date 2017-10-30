import { Injectable } from '@angular/core';

export interface IconFiles {
  imageFile: string,
  alt: string,
  link: string
}

export interface FrameworkConfigSettings {
  showLanguageSelector?: boolean,
  showUserControls?: boolean,
  showStatusBar?: boolean,
  showStatusBarBreakpoint?: number,
  socialIcons?: Array<IconFiles>
  signInBackgroundImage: string,
  signInLogoSize: number
}


@Injectable()
export class FrameworkConfigService {

  showLanguageSelector = true;
  showUserControls = true;
  showStatusBar = true;
  showStatusBarBreakpoint = true;
  socialIcons = new Array<IconFiles>();
  signInBackgroundImage = "";
  signInLogoSize = 320;


  configure(settings: FrameworkConfigSettings): void {
    Object.assign(this, settings);
  }

}
