const panagram = require('./02-Panagram')

describe('HowManyCamelCase', () => {
  test('it should return true when string is a panagram', () => {
    const sentence = 'The quick brown fox jumps over the lazy dog'

    expect(panagram(sentence)).toEqual(true)
  })

  test('it should return false when string is not a panagram', () => {
    const sentence = 'Efrei School'

    expect(panagram(sentence)).toEqual(false)
  })
})
