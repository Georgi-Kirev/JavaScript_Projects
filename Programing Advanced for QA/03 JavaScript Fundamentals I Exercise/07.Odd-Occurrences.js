
function oddNumbers(inputString) {
    // Правим буквите малки
    inputString = inputString.toLowerCase();

    // Разделяне по място и поставяне в списък.
    let word = inputString.split(" ");
    let result = [];

    // Проверка дали я има думата нечетен брой пъти.
    for (let i = 0; i < word.length; i++) {
        // Проверява колко пъти я има думата в масива.
        let count = word.filter(w => w === word[i]).length;

        // Проверява ако броя на думите е нечетен и думата не е написана я въвежда.
        if (count % 2 != 0) {

            if (!result.includes(word[i])) {
                result.push(word[i]);
            }
            
        }
        
    }

    console.log(result.join(" "))
}

oddNumbers('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')