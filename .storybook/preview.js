import '@progress/kendo-theme-default/dist/all.css'

import { addDecorator } from '@storybook/vue3';
// import { withInfo } from '@storybook/addon-info';

// addDecorator(
//   withInfo({
//     // header: false,
//   })
// );

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: ['Examples', ['BaseGrid', 'SelectGrid', 'SortGrid', 'FilterGrid', 'CheckboxGrid']],
    },
  },
}
