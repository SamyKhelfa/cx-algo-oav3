function howManyCamelCase(sentence = '') {
  let count = 0

  for (let i = 0; i < sentence.length; i++) {
    const code = sentence.charCodeAt(i)

    if (code >= 65 && code <= 90) {
      count++
    }
  }

  return count
}

module.exports = howManyCamelCase
