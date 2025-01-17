# gizziutil

npm package for stuff i probably use often

# Doc
## sleep(ms: number): Promise<void>
tldr: setTimeout for the lazy ones out there (me)

ms - milliseconds to wait

## jsonRead(filePath: string): Promise<any>
read a json file and return it JSON.parsed

filePath - path to the .json file

## jsonWrite(filePath: string, data: string[] | object[] | object): Promise<void>
Write data to a .json file.

filePath - path to the .json file
data - data to write to the .json file

## getRandomArbitrary(min: number, max: number): number
Get a pseudo-random number between the min number and the max number

min - minimal value
max - maximum value

## pickRandomElement(Array): any
Pick a random element from an array

array - the array to pick an element from

## chance(number): boolean
Return true with a probability of `number` percent

number - the probability percentage (0-100)