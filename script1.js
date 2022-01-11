const fs = require('fs')

fs.copyFile(`${__dirname}\\pages\\me.vue`, `${__dirname}\\pages\\blog\\mojblog.vue`, (err) => {
    if(err) throw err;

    console.log("File was copied")
})