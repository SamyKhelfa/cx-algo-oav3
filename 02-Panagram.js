function panagram(sentence) {
  const alphabets = 'abcdefghijklmnopqrstuvwxyz'

  for (let i = 0; i < alphabets.length; i++) {
    if (!sentence.toLowerCase().includes(alphabets[i])) {
      return false
    }
  }

  return true
}

module.exports = panagram
