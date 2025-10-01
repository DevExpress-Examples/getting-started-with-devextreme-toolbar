import { useCallback } from 'react';
import './App.css';
import 'devextreme/dist/css/dx.light.css';
import Toolbar, { Item } from 'devextreme-react/toolbar';
import type { ToolbarTypes } from 'devextreme-react/toolbar';
import type { ButtonTypes } from 'devextreme-react/button';
import notify from 'devextreme/ui/notify';

// DevExtreme types for toolbar buttons
type ToolbarButtonProperties = ButtonTypes.Properties;

const buttonOptions: ToolbarButtonProperties = {
  text: 'Back',
  stylingMode: 'text',
  type: 'back',
};

const saveButtonOptions: ToolbarButtonProperties = {
  text: 'Save',
  type: 'default',
};

const printButtonOptions: ToolbarButtonProperties = {
  text: 'Print',
  type: 'default',
};

const refreshButtonOptions: ToolbarButtonProperties = {
  icon: 'refresh',
  type: 'default',
};

function App(): JSX.Element {
  const showMessage = useCallback((message: string) => {
    notify(message, 'info', 2000);
  }, []);

  const handleItemClick = useCallback((e: ToolbarTypes.ItemClickEvent) => {
    const itemData = e.itemData;
    if (itemData?.options?.text) {
      showMessage(`${itemData.options.text} clicked`);
    } else if (itemData?.options?.icon) {
      showMessage(`${itemData.options.icon} clicked`);
    } else if (itemData?.text) {
      showMessage(`${itemData.text} clicked`);
    }
  }, [showMessage]);

  return (
    <div id="container">
      <Toolbar onItemClick={handleItemClick}>
        <Item location="before" widget="dxButton" options={buttonOptions} />
        <Item location="after" text="Products" />
        <Item location="after" widget="dxButton" options={saveButtonOptions} />
        <Item location="after" widget="dxButton" options={printButtonOptions} />
        <Item location="after" widget="dxButton" options={refreshButtonOptions} />
      </Toolbar>
      <div id="greeting">
        <h1>Getting Started with DevExtreme React Toolbar</h1>
        <p>Click toolbar items to see notifications.</p>
      </div>
    </div>
  );
}

export default App;
