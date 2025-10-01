import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import ToolbarContent from '../ToolbarContent.vue';

describe('ToolbarContent', () => {
  it('renders properly', () => {
    const wrapper = mount(ToolbarContent);
    expect(wrapper.text()).toContain('Getting Started with DevExtreme Vue Toolbar');
  });
});
