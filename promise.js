// Promise in JavaScript - All in One File

// 1. Creating a Promise
let promise1 = new Promise(function(resolve, reject) {
    let success = true;

    if (success) {
        resolve("Task completed successfully");
    } else {
        reject("Task failed");
    }
});

// Using then() and catch()
promise1
.then(function(result) {
    console.log("Result:", result);
})
.catch(function(error) {
    console.log("Error:", error);
});


// 2. Promise with setTimeout
let promise2 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve("Data loaded after 2 seconds");
    }, 2000);
});

promise2.then(function(data) {
    console.log(data);
});


// 3. Promise Chaining
let promise3 = new Promise(function(resolve) {
    resolve(5);
});

promise3
.then(function(num) {
    return num * 2;
})
.then(function(result) {
    return result * 3;
})
.then(function(finalResult) {
    console.log("Final Result:", finalResult);
});


// 4. Promise.resolve()
Promise.resolve("Immediate Success")
.then(function(data) {
    console.log(data);
});


// 5. Promise.reject()
Promise.reject("Immediate Error")
.catch(function(error) {
    console.log(error);
});


// 6. Promise.all()
let p1 = Promise.resolve(10);
let p2 = Promise.resolve(20);
let p3 = Promise.resolve(30);

Promise.all([p1, p2, p3])
.then(function(result) {
    console.log("Promise.all Result:", result);
});


// 7. Promise.race()
let race1 = new Promise(function(resolve) {
    setTimeout(function() {
        resolve("First Promise finished");
    }, 1000);
});

let race2 = new Promise(function(resolve) {
    setTimeout(function() {
        resolve("Second Promise finished");
    }, 2000);
});

Promise.race([race1, race2])
.then(function(result) {
    console.log("Promise.race Result:", result);
});


// 8. Real Example Function
function getUserData() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve("User data loaded successfully");
        }, 1500);
    });
}

getUserData()
.then(function(data) {
    console.log(data);
});