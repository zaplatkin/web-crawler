const {Crawler} = require('./index')
const getAllLinks  = new Crawler({
    depth: 3,
    url : "https://www.google.com.ua",
    onSuccess : console.log,
    onFailure : console.log,
    onFinsh : (data) => console.log(data.length) 
})

getAllLinks.crawl()