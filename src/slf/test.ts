import myconfig from './result.json'

// const con = myconfig as any[]

const configsMap: Map<string, string> = new Map<string, string>(myconfig as any[])

// console.log(configsMap)
// myconfig.config.map((item) => {
//   console.log(item)
// })
const state = {
  data: ''
}

const axios = async () => {
  console.log('can getData')
  return 'babc'
}

const fenchItem = async () => {
  return await axios()
}

const action = async () => {
  console.log('call get')
  await fenchItem().then((data) => {
    state.data = data
    console.log('set value')
  })
}

const result = async () => {
  await action()
  console.log('state value is ', state.data)
}

result()
// console.log(wait get())
