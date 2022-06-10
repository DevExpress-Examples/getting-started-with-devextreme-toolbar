import { Component } from '@angular/core';
import notify from 'devextreme/ui/notify';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {

  backButtonOptions = {
    icon: 'back',
    onClick() {
      showMessage('Back');
    }
  }

  textBoxOptions = {
    placeholder: 'Search...',
    showClearButton: true
  }

  searchButtonOptions = {
    icon: 'search',
    onClick() {
      showMessage('Search');
    }
  }

  aboutButtonOptions = {
    icon: 'info',
    text: 'About',
    onClick() {
      showMessage('About');
    }
  }

  profileButtonOptions = {
    icon: 'user',
    text: 'Profile',
    onClick() {
      showMessage('Profile');
    }
  }

  settingsButtonOptions = {
    icon: 'preferences',
    text: 'Settings',
    onClick() {
      showMessage('Settings');
    }
  }
}

function showMessage(name: string) {
  notify(
    {
      message: name + ' button has been clicked!',
      width: 300,
      position: {
        my: 'bottom',
        at: 'bottom',
        of: '#container'
      }
    },
    'info',
    500
  );
};
