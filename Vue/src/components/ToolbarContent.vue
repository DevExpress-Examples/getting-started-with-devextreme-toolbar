<script setup lang="ts">
import 'devextreme/dist/css/dx.light.css';
import DxToolbar, { DxItem } from 'devextreme-vue/toolbar';
import type { DxToolbarTypes } from 'devextreme-vue/toolbar';
import type { DxButtonTypes } from 'devextreme-vue/button';
import notify from 'devextreme/ui/notify';

// DevExtreme types for toolbar buttons
type ToolbarButtonProperties = DxButtonTypes.Properties;

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

function showMessage(message: string): void {
  notify(message, 'info', 2000);
}

function handleItemClick(e: DxToolbarTypes.ItemClickEvent): void {
  const itemData = e.itemData;
  if (itemData?.options?.text) {
    showMessage(`${itemData.options.text} clicked`);
  } else if (itemData?.options?.icon) {
    showMessage(`${itemData.options.icon} clicked`);
  } else if (itemData?.text) {
    showMessage(`${itemData.text} clicked`);
  }
}
</script>

<template>
  <div id="container">
    <DxToolbar @item-click="handleItemClick">
      <DxItem
        location="before"
        widget="dxButton"
        :options="buttonOptions"
      />
      <DxItem
        location="after"
        text="Products"
      />
      <DxItem
        location="after"
        widget="dxButton"
        :options="saveButtonOptions"
      />
      <DxItem
        location="after"
        widget="dxButton"
        :options="printButtonOptions"
      />
      <DxItem
        location="after"
        widget="dxButton"
        :options="refreshButtonOptions"
      />
    </DxToolbar>
    <div id="greeting">
      <h1>Getting Started with DevExtreme Vue Toolbar</h1>
      <p>Click toolbar items to see notifications.</p>
    </div>
  </div>
</template>

<style scoped>
#container {
  width: 900px;
  position: relative;
}

#greeting {
  margin-top: 40px;
  text-align: center;
}

#greeting h1 {
  font-size: 28px;
  color: #333;
}

#greeting p {
  font-size: 16px;
  color: #666;
}
</style>
