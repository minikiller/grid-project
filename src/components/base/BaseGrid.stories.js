import { action } from '@storybook/addon-actions'
import BaseGrid from './BaseGrid.vue'
import base from './base.md'

import { createRandomData, columns } from '../template/data'

export default {
  title: 'Examples/BaseGrid',
  component: BaseGrid,
  argTypes: {
    backgroundColor: { control: 'color' },
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] }
    },
    onRowClick: {}
  },
  parameters: {
    info: {}
  }
}

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { BaseGrid },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup () {
    return { args }
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<BaseGrid v-bind="args" @rowClick="onRowClick"/>',
  methods: {
    onRowClick: action('onRowClick')
  }
})

const data = createRandomData(20)

const sortColumns = [{ field: 'ProductID', dir: 'desc' }]

export const Primary = Template.bind({})
Primary.args = {
  'tc-data': data,
  'tc-columns': columns
  // tcSortColumns: sortColumns,
  // idField: 'ProductID'
}

Primary.story = {
  parameters: {
    notes: { base }
  }
}
// export const Secondary = Template.bind({})
// Secondary.args = {
//   label: 'Button'
// }

// export const Large = Template.bind({})
// Large.args = {
//   size: 'large',
//   label: 'Button'
// }

// export const Small = Template.bind({})
// Small.args = {
//   size: 'small',
//   label: 'Button'
// }
