const input = '402328-864247'

const range = input.split('-')
let counter = 0

for(let test = Number(range[0]); test < Number(range[1]); test++) {
  let ajacent = new Map()
  let desc = true
  let prev = 0
  const numString = String(test).split('')

  numString.forEach(element => {
    const num = Number(element)
    
    if (prev === num) {
      if (ajacent.has(`${num}`)) {
        let val = ajacent.get(`${num}`)
        ajacent.set(`${num}`, ++val)
      } else {
        ajacent.set(`${num}`, 2)
      }
    } 
    
    if (prev > num) {
      desc = false
    }
    prev = num
  });

  if (Array.from(ajacent.values()).includes(2) && desc) {
    counter++
  }
}

console.log(counter)