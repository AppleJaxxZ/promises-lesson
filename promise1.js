

const isGood = true;

const fetchSomeData = new Promise((resolve, reject) => {
    if (!isGood) {
        reject("error fetching data")
    } else {
        resolve({
            id: 1,
            message: "nice work!"
        })
    }
});

fetchSomeData.then(fetchedData => {
    console.log('then:', fetchedData)
}).catch(error => {
    console.log("Error:", error)
})