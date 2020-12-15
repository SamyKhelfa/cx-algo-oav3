const howManyCamelCase = require('./01-HowManyCamelCase')

describe('HowManyCamelCase', () => {
  test('it should return 0 when no string passed as parameter', () => {
    expect(howManyCamelCase()).toEqual(0)
  })

  test('it should return 2 when there is 2 caps', () => {
    expect(howManyCamelCase('imACamel')).toEqual(2)
  })

  test('it should return 3 when there is 3 caps', () => {
    expect(howManyCamelCase('imACamelCase')).toEqual(3)
  })
})
