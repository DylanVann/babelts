import { add } from './add'

async function run() {
    throw new Error('Horrible add error.')
    console.log(add(2, 2))
}

run()