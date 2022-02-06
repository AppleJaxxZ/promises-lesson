//functions that return promises and promise chaining

//simulate fetching some data

let fetchData = function (data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Fetching data complete");
            resolve({ id: 1, message: "nice work" })
        }, 2000)
    })
}


//parse data
let parseData = function (data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let parsedOutput = ` Parsed the data for id: ${data.id} with message: ${data.message}`
            resolve({ parsed: parsedOutput })
        }, 2000)
    })
}


//echo data
let echoData = function (data) {
    return new Promise((resolve, reject) => {
        foo = bar;
        setTimeout(() => {
            console.log(data.parsed)
        }, 2000)
    })
}

fetchData().then(parseData).then(echoData).catch(err => {
    console.error(err)
})