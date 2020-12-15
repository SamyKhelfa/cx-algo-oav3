const marsos = require('./03-Marsos')

describe('Marsos', () => {
    test('it should return true if message contain "sos"', () => {
        const message = 'SOFSOSSISSOW'
    }

    expect(marsos(message)).toEqual(true)
})

test('it should return false when message not contain "sos"', () => {
    const sentence = "SOFSOSISSOW"

    expect(marsos(message)).toEqual(false)
})