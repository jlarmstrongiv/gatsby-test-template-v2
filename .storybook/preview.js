// import project styles
import '../src/component-library/global.css';
import React from 'react';
import { addDecorator } from '@storybook/react';
import { addParameters } from '@storybook/client-api';
import viewports from './viewports';
import { Layout } from '../src/component-library/index';

// Add Layout
function layout(storyFn) {
  return <Layout>{storyFn()}</Layout>;
}
addDecorator(layout);

// Maintain Storybook Hierarchy
// https://github.com/storybookjs/storybook/blob/master/MIGRATION.md#simplified-hierarchy-separators
addParameters({
  options: {
    showRoots: true,
  },
});

addParameters({
  viewport: {
    viewports,
  },
});
