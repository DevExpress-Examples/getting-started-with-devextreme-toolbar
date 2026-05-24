import { Component } from '@angular/core';
import notify from 'devextreme/ui/notify';
import { DxButtonTypes } from 'devextreme-angular/ui/button';
import { DxTextBoxTypes } from 'devextreme-angular/ui/text-box';

type ToolbarButtonOptions = DxButtonTypes.Properties;
type SearchBoxOptions = DxTextBoxTypes.Properties;

import { DxToolbarModule } from 'devextreme-angular/ui/toolbar';

@Component({
    selector: 'app-root',
    imports: [DxToolbarModule],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  backButtonOptions: ToolbarButtonOptions = {
    icon: 'back',
    onClick: () => {
      this.showMessage('Back');
    },
  };

  textBoxOptions: SearchBoxOptions = {
    placeholder: 'Search...',
    showClearButton: true,
  };

  searchButtonOptions: ToolbarButtonOptions = {
    icon: 'search',
    onClick: () => {
      this.showMessage('Search');
    },
  };

  aboutButtonOptions: ToolbarButtonOptions = {
    icon: 'info',
    text: 'About',
    onClick: () => {
      this.showMessage('About');
    },
  };

  profileButtonOptions: ToolbarButtonOptions = {
    icon: 'user',
    text: 'Profile',
    onClick: () => {
      this.showMessage('Profile');
    },
  };

  settingsButtonOptions: ToolbarButtonOptions = {
    icon: 'preferences',
    text: 'Settings',
    onClick: () => {
      this.showMessage('Settings');
    },
  };

  private showMessage(name: string): void {
    notify(
      {
        message: `${name} button has been clicked!`,
        width: 300,
        position: {
          my: 'bottom',
          at: 'bottom',
          of: '#app-container',
        },
      },
      'info',
      500,
    );
  }
}
