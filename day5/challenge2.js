const input = [3,225,1,225,6,6,1100,1,238,225,104,0,1102,17,65,225,102,21,95,224,1001,224,-1869,224,4,224,1002,223,8,223,101,7,224,224,1,224,223,223,101,43,14,224,1001,224,-108,224,4,224,102,8,223,223,101,2,224,224,1,223,224,223,1101,57,94,225,1101,57,67,225,1,217,66,224,101,-141,224,224,4,224,102,8,223,223,1001,224,1,224,1,224,223,223,1102,64,34,225,1101,89,59,225,1102,58,94,225,1002,125,27,224,101,-2106,224,224,4,224,102,8,223,223,1001,224,5,224,1,224,223,223,1102,78,65,225,1001,91,63,224,101,-127,224,224,4,224,102,8,223,223,1001,224,3,224,1,223,224,223,1102,7,19,224,1001,224,-133,224,4,224,102,8,223,223,101,6,224,224,1,224,223,223,2,61,100,224,101,-5358,224,224,4,224,102,8,223,223,101,3,224,224,1,224,223,223,1101,19,55,224,101,-74,224,224,4,224,102,8,223,223,1001,224,1,224,1,224,223,223,1101,74,68,225,4,223,99,0,0,0,677,0,0,0,0,0,0,0,0,0,0,0,1105,0,99999,1105,227,247,1105,1,99999,1005,227,99999,1005,0,256,1105,1,99999,1106,227,99999,1106,0,265,1105,1,99999,1006,0,99999,1006,227,274,1105,1,99999,1105,1,280,1105,1,99999,1,225,225,225,1101,294,0,0,105,1,0,1105,1,99999,1106,0,300,1105,1,99999,1,225,225,225,1101,314,0,0,106,0,0,1105,1,99999,107,677,677,224,102,2,223,223,1006,224,329,1001,223,1,223,1008,226,677,224,102,2,223,223,1006,224,344,1001,223,1,223,7,226,677,224,102,2,223,223,1005,224,359,1001,223,1,223,8,226,226,224,102,2,223,223,1006,224,374,1001,223,1,223,1007,226,226,224,102,2,223,223,1006,224,389,101,1,223,223,8,677,226,224,1002,223,2,223,1005,224,404,101,1,223,223,1108,677,226,224,102,2,223,223,1006,224,419,1001,223,1,223,1108,226,677,224,102,2,223,223,1006,224,434,101,1,223,223,1108,677,677,224,1002,223,2,223,1005,224,449,101,1,223,223,1008,677,677,224,1002,223,2,223,1006,224,464,101,1,223,223,7,677,226,224,1002,223,2,223,1006,224,479,101,1,223,223,108,677,677,224,1002,223,2,223,1005,224,494,101,1,223,223,107,226,677,224,1002,223,2,223,1006,224,509,101,1,223,223,107,226,226,224,102,2,223,223,1006,224,524,1001,223,1,223,1107,226,677,224,1002,223,2,223,1006,224,539,101,1,223,223,1008,226,226,224,102,2,223,223,1006,224,554,1001,223,1,223,8,226,677,224,1002,223,2,223,1006,224,569,101,1,223,223,1007,677,677,224,102,2,223,223,1005,224,584,1001,223,1,223,1107,677,226,224,1002,223,2,223,1006,224,599,101,1,223,223,7,226,226,224,1002,223,2,223,1005,224,614,101,1,223,223,108,677,226,224,1002,223,2,223,1005,224,629,1001,223,1,223,108,226,226,224,1002,223,2,223,1005,224,644,101,1,223,223,1007,677,226,224,1002,223,2,223,1006,224,659,101,1,223,223,1107,226,226,224,102,2,223,223,1005,224,674,1001,223,1,223,4,223,99,226]

let processing = true
let pos = 0

let param = 5

const findParameterModes = (command) => {
  const stringCommand = String(command)
  command = Number(stringCommand.substring(stringCommand.length - 2, stringCommand.length))

  if (stringCommand.length === 5) {
    return [stringCommand.substring(2, 3), stringCommand.substring(1, 2), stringCommand.substring(0, 1), command]
  } else if (stringCommand.length === 4) {
    return [stringCommand.substring(1, 2), stringCommand.substring(0, 1), '0', command]
  } else {
    return [stringCommand.substring(0, 1), '0', '0', command]
  }
}
const findInputs = (params, input, pos) => {
  const val1 = params[0] === '0' ? input[pos+1] : pos+1
  const val2 = params[1] === '0' ? input[pos+2] : pos+2
  const val3 = params[2] === '0' ? input[pos+3] : pos+3

  return [val1, val2, val3]
}

while (processing) {
  let command = input[pos]
  let params = ['0', '0', '0']

  if (command > 99) {
    params = findParameterModes(command)
    command = params[3]
  }

  const add = () => {
    const vals = findInputs(params, input, pos)

    input[vals[2]] = input[vals[0]]+input[vals[1]]
  }
  const multiply = () => {
    const vals = findInputs(params, input, pos)

    input[vals[2]] = input[vals[0]]*input[vals[1]]
  }
  const set = () => {
    const val1 = params[0] === '0' ? input[pos+1] : pos+1

    input[val1] = param
  }
  const get = () => {
    const val1 = params[0] === '0' ? input[pos+1] : pos+1

    console.log('value', input[val1])
  }
  const jumpIfTrue = () => {
    const vals = findInputs(params, input, pos)

    if (input[vals[0]] !== 0) {
      pos = input[vals[1]]
    } else {
      pos += 3
    }
  }
  const jumpIfFalse = () => {
    const vals = findInputs(params, input, pos)

    if (input[vals[0]] === 0) {
      pos = input[vals[1]]
    } else {
      pos += 3
    }
  }
  const lessThan = () => {
    const vals = findInputs(params, input, pos)

    if (input[vals[0]] < input[vals[1]]) {
      input[vals[2]] = 1
    } else {
      input[vals[2]] = 0
    }
  }
  const equals = () => {
    const vals = findInputs(params, input, pos)

    if (input[vals[0]] === input[vals[1]]) {
      input[vals[2]] = 1
    } else {
      input[vals[2]] = 0
    }
  }

  switch(command) {
    case 1:
      add()
      pos += 4
      break
    case 2:
      multiply()
      pos += 4
      break
    case 3:
      set()
      pos += 2
      break
    case 4:
      get()
      pos += 2
      break
    case 5:
      jumpIfTrue()
      break
    case 6:
      jumpIfFalse()
      break
    case 7:
      lessThan()
      pos += 4
      break
    case 8:
      equals()
      pos += 4
      break
    default:
      console.log('command not understood:', command, input[pos])
      processing = false
      break
  }

  if (input[pos] === 99) {
    processing = false
  }
}
