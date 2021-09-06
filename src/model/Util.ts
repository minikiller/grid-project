interface ControlInterface {
  count: number
  timer: ReturnType<typeof setInterval>
}

const resultMap = new Map<string, ControlInterface >([])

const action = (key) => {
  if (resultMap.has(key)) {
    const data = resultMap.get(key)
    if (data) { data.count = data.count + 1 }
  } else {
    const intrval = setInterval(() => {
      console.log('This is testing ' + key)
    }, 10000)
    resultMap.set(key, { count: 1, timer: intrval })
  }
}

const release = (key) => {
  const value = resultMap.get(key)
  let c = value?.count
  if (c) { if (c > 0) c = c - 1 }
  if (c === 0) {
    clearInterval(value?.timer)
    console.log('clear key ', key)
    resultMap.delete(key)
  }
}

action('hello')
console.log(resultMap)
action('hello')
console.log(resultMap)
action('world')
console.log(resultMap)
setTimeout(() => {
  release('world')
  console.log(resultMap)
}, 30000)
