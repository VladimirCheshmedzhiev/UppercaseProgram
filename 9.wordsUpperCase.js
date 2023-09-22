function uppCase(text){

    return text.split(/\W+/gm)
    .join(" ")
    .trim()
    .split(" ")
    .map(x => x.toUpperCase())
    .join(", ")

}
console.log(uppCase('Hi, how are you?'))