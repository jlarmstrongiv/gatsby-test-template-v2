/**
 * Layout Component
 *
 * As Gatsby Layout Component
 * - https://www.gatsbyjs.org/packages/gatsby-plugin-layout/
 *
 * As Storybook Decorator
 * - https://storybook.js.org/docs/addons/introduction/#storybook-decorators
 */

import React from 'react';
import Styling from './examples/Styling/Styling';

// Multiple Layouts
// https://www.gatsbyjs.org/packages/gatsby-plugin-layout/#handling-multiple-layouts
export default function Layout({ children }) {
  return (
    <React.Fragment>
      <Styling />
      {children}
    </React.Fragment>
  );
}
