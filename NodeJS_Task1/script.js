const os = require("os")
const fs = require("fs")
const path = require("path")
const express = require("express")
const app = express()
app.use(express.json()) //middleware
const port = 3000 || process.env.PORT
filesPath = "D:\\Wiremock_POC\\"
app.get('/', (request, response) => {  
    response.send("WELCOME")

})


let getDetails = (filepath,output) => {
    if (fs.statSync(filepath).isDirectory()) {
        output += "<li><img height = '50px' width = '50px' src='https://www.pngitem.com/pimgs/m/118-1189137_folder-png-open-yellow-folder-icon-png-transparent.png'> "+filepath+"</li>"
        let FN = fs.readdirSync(filepath)
        FN.forEach((file)=>{
            output = getDetails(filepath +"\\"+ file,output)
        })
      } else {
        output += "<li><img height = '50px' width = '50px' src='https://findicons.com/files/icons/2813/flat_jewels/512/file.png'> "+filepath+"</li>"  
      }
    return output  
}

//get
app.get('/list', (request, response) => { 
    filenames = fs.readdirSync(filesPath) 
    let output = "<div><ol>"
    filenames.forEach((file) => {
        output = getDetails(filesPath + file,output)
    })
    output += "</ol></div>"
    response.send(output)
})

app.listen(port, () => console.log(`Your app is running with port ${port}`))
