// TUESDAY, 10 FEBRUARY 2026, 13:30 - 14:30

console.log("1");

async function user() {
    console.log("2")
    const request = await fetch("https://694ba34a26e870772068a7b1.mockapi.io/api/v1/users");
    const response = await request.json();
    console.log(response);
};
user();
console.log("4");

// Async function: async is used in the front function. This means: The function must return a Promise inside, and you can use await.
// Await function: await is used to wait for the result of a Promise.
// The program waits for the Promise to complete but doesn't block the application. The code looks synchronous (top to bottom).
// What happens behind the scenes: The async function is called -> Meets await fetch(...).
  // JavaScript: Sends an async task (fetch) to the Web API/environment without waiting, continues executing other code (the event loop continues running).
  // When the fetch is complete, the result goes to the JavaScript microtask queue, and execution resumes immediately after the await.
// Just “wait” for that async function, Not waiting for the entire JavaScript program

// async → allows the use of await
// await → waits for the Promise to complete
// the async process is sent to the Web API in the background and processed
// JavaScript continues to run other code
// after the async process completes, it is sent back to JavaScript