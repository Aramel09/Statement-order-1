console.log("<<< Starting >>>"); // 1
// When the code is run this is being call Synchronusly, it goes first


setTimeout(() => {  //6
    // Timeout is called however is added to macro queue, so it has to wait for the other ones to be resolved, that's why is the last one
	console.log('Timeout Called');
}, 0);

const p1 = new Promise((resolve, reject) => {
    // The Promise is called and anything that is not being resolved it's going to be called Synchronously that's why "First" and "Last" are
    //called in second and third place
  console.log("First"); // 2
  resolve("Second"); // 5
  console.log("Last");  // 3
});

p1.then((res) => {
        // "Second" is a promise with a .then and it's added to the Micro queue and that's why it's going to go in fifth place
  console.log(res); 
});
console.log("<<< Ending >>>"); //4

