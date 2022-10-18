const my_string = "I like Dogs because dogs are adorable!";

let pattern = /dogs/gi;
let replacement = "cats";

let my_new_string = my_string.replaceAll(pattern,replacement);

console.log(my_new_string);
