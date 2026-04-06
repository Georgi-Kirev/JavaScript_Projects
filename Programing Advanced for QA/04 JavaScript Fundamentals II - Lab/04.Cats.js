
function catMeow(inputString) {

    for (let i = 0; i < inputString.length; i++) {
        let catName = inputString[i].split(" ")[0];
        let catAge = inputString[i].split(" ")[1];
        
        class cats {

            constructor(catName,catAge) {
                this.catName = catName,
                this.catAge = catAge;
            }
            meow() {
                return (`${this.catName}, age ${this.catAge} says Meow`);
            }
        }
        const oneCat = new cats(catName,catAge)
        console.log(oneCat.meow());
    }
}


catMeow(['Mellow 2', 'Tom 5'])