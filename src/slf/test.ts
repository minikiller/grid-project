import myconfig from './result.json'

// const con = myconfig as any[]

const configsMap: Map<string, string> = new Map<string, string>(myconfig as any[])

console.log(configsMap)
// myconfig.config.map((item) => {
//   console.log(item)
// })
