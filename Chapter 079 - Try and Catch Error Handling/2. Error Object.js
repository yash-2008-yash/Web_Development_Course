let number1 = 10
function divide(a, b) {
    return a / b
}

try {
    console.log(`Result: ${divide(number1, number2)}`)
} catch (error) {
    console.log(error.name)
    console.log(error.message)
    console.log(error.stack)
} finally {
    console.log("THANK YOU FOR VISITING")
}

// "error" inside 'catch' is an object.
// We can access different values from it.

// error.name will print "ReferenceError"

// error.message will print "number2 is not defined"

/*
    error.stack will print:
    "ReferenceError: number2 is not defined
        at Object.<anonymous> (/home/yashwanth-m/Files/Web Development Course/Chapter 079 - Try and Catch Error Handling/2. Error Object.js:7:44)
        at Module._compile (node:internal/modules/cjs/loader:1706:14)
        at Object..js (node:internal/modules/cjs/loader:1839:10)
        at Module.load (node:internal/modules/cjs/loader:1441:32)
        at Function._load (node:internal/modules/cjs/loader:1263:12)
        at TracingChannel.traceSync (node:diagnostics_channel:328:14)
        at wrapModuleLoad (node:internal/modules/cjs/loader:237:24)
        at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:171:5)
        at node:internal/main/run_main_module:36:49"
*/