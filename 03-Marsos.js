function marsos(message) {
    // const message = 'SOF SOS SIS SOW'
    const divide = message.match(/.{1,3}/g)
    let count = 0

    for(let i = 0; i < divide.length; i++) {
        letter = divide[i];
        // letter = 'SOF'   0
        // letter = 'SOS'   1
        // letter = 'SIF'   2
        // letter = 'SOW'   3
       
        if (letter[0] !== 'S'){
            count++
        }

        if (letter[1] !== 'O'){
            count++
        }

        if (letter[2] !== 'S'){
            count++
        }
    }

    return count
}


module.exports = marsos