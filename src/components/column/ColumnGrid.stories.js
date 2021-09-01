import ColumnGrid from './ColumnGrid.vue'
export default {
  title: 'Examples/ColumnGrid',
  component: ColumnGrid,
  argTypes: {
    onClick: {},
    onLeftChanged: {}
  }
}

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { ColumnGrid },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup () {
    return { args }
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<ColumnGrid v-bind="args" />'
})

const columns = [
  {
    ID: 1,
    field: 'ID',
    title: 'ID',
    width: '40px',
    headerCell: 'myHeaderTemplate',
    hidden: false,
    selected: false
  },
  {
    ID: 2,
    field: 'ProductName',
    title: 'Product Name',
    selected: false,
    hidden: false

  },
  {
    ID: 3,
    field: 'UnitPrice',
    title: 'Price',
    selected: false,
    hidden: false
  }
]

const staticColumns = [
  {
    field: 'ID',
    filterable: false,
    title: 'ID',
    width: '50px'
    // hidden: true
  },
  { field: 'field', title: 'Column Name' }
]

export const Primary = Template.bind({})
Primary.args = {
  allColumn: columns
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
