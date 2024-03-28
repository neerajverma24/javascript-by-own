// Blog-62 ======================================================================================================

// Explain the concept of local storage for Web Page in JS ?

// 1. Web storage objects, such as localStorage, allow the storage of key/value pairs in the browser.

// 2. Data stored in localStorage survives a full browser restart. This means the data persists even if the user closes the browser and opens it again.

// Methos are : 
// setItem(key, value)
// getItem(key)
// removeItem(key)
// clear()

localStorage.setItem("name", "work")  // sets item in local storage
console.log(localStorage.getItem("name"))  // check console
delete localStorage.name; // deleted items from local storage(i.e key/value)