export {}

type mojiretu = string

const fooString: string = 'Heloo'
const fooMojiretu: mojiretu = 'Heloo'

const example1 = {
  name: 'Tokyo',
  year: 2020,
}

type Profile = {
  name: string
  year: number
}

const example2: Profile = {
  name: 'Tokyo',
  year: 2020,
}

type Profile2 = typeof example1
