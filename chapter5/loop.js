
/**
 *                           YOUR OWN LOOP
 * Write a higher-order function loop that provides something like 
 * a for loop statement. It takes a value, a test function, an update 
 * function, and a body function. Each iteration, it  rst runs the test 
 * function on the current loop value and stops if that returns false.
 *  Then it calls the body function, giving it the current value. 
 * Finally, it calls the update function to create a new value 
 * and starts from the beginning.
 * When de ning the function, you can use a regular loop to do the actual looping.
 */

function loop(start) {
  for (let value = start; test(value); value = update(value)) {
    body(value);
 }}

// a test function
const test = (value) =>{
 return  value > 0 ? true : false;
}

//an update function
const  update =(value) =>{
  return value - 1;
}

//a body function
 const body =(value) =>{
  return console.log(value);
 }
 
 //call to loop
loop(3);