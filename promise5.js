
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

const url = "https://jsonplaceholder.typicode.com/posts/1";


function checkStatus(res) {
    if (res.status === 200) {
        return res
    } else {
        let err = new Error(res.statusText)
        err.response = res;
        throw err;
    }
}

function getPostJson(res) {
    console.log('Getting Json...')
    return res.json()
}

function getTitle(post) {
    console.log('Getting the title...')
    return post.title
}

function echoTitle(title) {
    console.log(title)
}
//Bad News, not returning, nesting, not catching
fetch(url).then(checkStatus)
    .then(result => {
        console.log('Got a result...');
        getPostJson(result)
            .then(post => getTitle(post))
    }).then(title => echoTitle(title))


//Better News - terminate chain with catch, flatten
fetch(url).then(checkStatus).then(result => {
    console.log("got a result...");
    return getPostJson(result)
}).then(getTitle).then(echoTitle).catch(err => {
    console.error(err)
})
