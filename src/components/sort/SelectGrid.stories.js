import SortGrid from './SortGrid.vue'
import { createRandomData, columns } from '../template/data'

export default {
  title: 'TCGrid/Example/c.SortGrid',
  component: SortGrid,
  argTypes: {
    backgroundColor: { control: 'color' },
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] }
    },
    onClick: {}
  }
}

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { SortGrid },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup () {
    return { args }
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<SortGrid v-bind="args" />'
})

const data = createRandomData(20)

const sortColumns = [{ field: 'ProductID', dir: 'asc' }]

export const Primary = Template.bind({})
Primary.args = {
  tcColumns: columns,
  tcData: data,
  tcSortColumns: sortColumns,
  idField: 'ProductID'
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
