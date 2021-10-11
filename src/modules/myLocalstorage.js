export class myLocalStorage {
    #myArray = ["a","b","c"]
    #name = "";

    constructor(name ="default", myArray = []) {
        this.#myArray = myArray;
        this.#name = name;
    }

    #GUID() {
        return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
          (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
        );
    }
      
    delete(element = {}){

        this.save();
    }

    update(element = {}){

        this.save();
    }

    read(index = 0){
        return this.#myArray[index];
    }

    create(element = {}){
        const guid = this.#GUID();
        const gen = {id: guid, ...element};
        this.#myArray.push(gen);
        this.save();
        return gen;
    }

    search(property ='', value =''){
        return this.#myArray.filter( element => element[property] === value);
    }

    indexOf(element = {}){
        this.#myArray.indexOf(element);
    }

    save(){
        localStorage.setItem(this.#name, JSON.stringify(this.#myArray));
    }

    load(){
        this.#myArray = JSON.parse(localStorage.getItem(this.#name));
    }
}