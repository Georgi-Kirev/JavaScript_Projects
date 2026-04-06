

function wordsCount(wordsInput) {
    let targetWords = wordsInput[0].split(" ");
    let counts = {};

    // създаваме обект за броене
    for (let word of targetWords) {
        counts[word] = 0;
    }

    // махаме първия ред
    wordsInput.shift();

    // броим
    for (let word of wordsInput) {
        if (counts.hasOwnProperty(word)) {
            counts[word]++;
        }
    }

    // сортираме по брой
    let sorted = Object.entries(counts)
        .sort((a, b) => b[1] - a[1]);

    // принтираме
    for (let [word, count] of sorted) {
        console.log(`${word} - ${count}`);
    }
}


wordsCount([

'this sentence',

'In', 'this', 'sentence', 'you', 'have',

'to', 'count', 'the', 'occurrences', 'of',

'the', 'words', 'this', 'and', 'sentence',

'because', 'this', 'is', 'your', 'task'

])


wordsCount([

    'is the',

    'first', 'sentence', 'Here', 'is',

    'another', 'the', 'And', 'finally', 'the',

    'the', 'sentence'])