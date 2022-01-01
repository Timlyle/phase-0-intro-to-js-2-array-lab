// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(catname) {
    cats.push(catname);
};

function destructivelyPrependCat(catname){
    cats.unshift(catname);

};

function destructivelyRemoveLastCat(catname) {
    cats.pop(catname);
};

function destructivelyRemoveFirstCat(catname) {
     cats.shift(catname);
};

function appendCat(catname) {
    return [...cats, catname];
    
};

function prependCat(catname) {
    return [catname,...cats]
};

function removeLastCat() {
    return cats.slice(0, -1);
}; 

function removeFirstCat() {
 return cats.slice(1)
};