const marsos = require('./03-Marsos.js')
const message = 'SOFSOSSISSOW'
describe('Marsos', () => {
    test('it should return 3 if message contain sos', () => {
        expect(marsos(message)).toEqual(3)
})
    })

