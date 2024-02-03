const fs = require('fs')

fs.readFile('../Https_File_system_module/cat_image.json', (err, data) => {
    if(err) {
        console.log('err');
    }else{
        const result = JSON.parse(data);
    

        console.log(result)
    }
})