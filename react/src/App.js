import React from 'react';

import 'devextreme/dist/css/dx.light.css';

import Toolbar, { Item } from 'devextreme-react/toolbar';
import notify from 'devextreme/ui/notify';
import 'devextreme/ui/text_box';

const showMessage = (name) => {
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
}

const backButtonOptions = {
  icon: 'back',
  onClick() {
    showMessage('Back');
  }
}

const textBoxOptions = {
  placeholder: 'Search...',
  showClearButton: true
}

const searchButtonOptions = {
  icon: 'search',
  onClick() {
    showMessage('Search');
  }
}

const aboutButtonOptions = {
  icon: 'info',
  text: 'About',
  onClick() {
    showMessage('About');
  }
}

const profileButtonOptions = {
  icon: 'user',
  text: 'Profile',
  onClick() {
    showMessage('Profile');
  }
}

const settingsButtonOptions = {
  icon: 'preferences',
  text: 'Settings',
  onClick() {
    showMessage('Settings');
  }
}

const renderBack = () => {
  return <div id="back">Go back</div>;
}

const renderGreeting = () => {
  return <div id="greeting">Hi <b>User</b>!</div>;
}

function App() {
  return (
    <div id="container">
      <Toolbar
        width={500}
      >
        <Item 
          location="before" 
          widget="dxButton" 
          options={backButtonOptions}
        >
        </Item>
        <Item 
          location="before"
          render={renderBack}
        >
        </Item>
        <Item 
          location="center" 
          widget="dxTextBox" 
          options={textBoxOptions}
        >
        </Item>
        <Item 
          location="center" 
          widget="dxButton" 
          options={searchButtonOptions}
        >
        </Item>
        <Item 
          location="after" 
          widget="dxButton"
          locateInMenu="auto"
          options={aboutButtonOptions}
        >
        </Item>
        <Item 
          location="after"
          locateInMenu="always"
          render={renderGreeting}
        >
        </Item>
        <Item 
          location="after" 
          widget="dxButton"
          locateInMenu="always"
          options={profileButtonOptions}
        >
        </Item>
        <Item 
          location="after" 
          widget="dxButton"
          locateInMenu="always"
          options={settingsButtonOptions}
        >
        </Item>
      </Toolbar>
    </div>
  );
}

export default App;
