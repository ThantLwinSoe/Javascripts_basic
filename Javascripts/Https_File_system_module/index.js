const fs = require("fs")
const https = require("https")

https.get("https://jsonplaceholder.typicode.com/posts", (res) => {

    let data = '';

    res.on('data', (chunk) => data += chunk);

    res.on('end', () => {
        fs.writeFile('cat_image.json', data, () => {
            console.log('Save to file : Completed');
        })
    })

})