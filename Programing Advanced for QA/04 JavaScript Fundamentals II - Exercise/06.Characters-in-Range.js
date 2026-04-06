
function charactersRange(a, b) {
    let startChar = Math.min(a.charCodeAt(), b.charCodeAt());
    let endChar = Math.max(b.charCodeAt(), a.charCodeAt());

    let charsList = [];

    for (let i = startChar + 1 ; i < endChar; i++) {
        let currentChar = String.fromCharCode(i);
        charsList.push(currentChar);
    }

    console.log(charsList.join(' '));
}


charactersRange('a','d')

charactersRange('#',':')

charactersRange('C','#')