var http = require('http')
var Canvas = require('canvas')

var clock = require('./clock')
var generator = require('./index')

// global.navigator = {
//     userAgent: 'node.js'
// };

var app = require("express")()


var PORT = process.env.PORT || 4000

const hashdata = new Uint8Array([
    154, 152, 251, 47, 13, 59, 4, 25, 89, 250, 140, 169, 120, 34, 240, 210, 147,
    154, 152, 251, 47, 13, 59, 4, 25, 89, 250, 140, 169, 120, 34, 240, 210, 147,
    154, 152, 251, 47, 13, 59, 4, 25, 89, 250, 140, 169, 120, 34, 240, 210, 147,
    154, 152, 251, 47, 13, 59, 4, 25, 89, 250, 140, 169, 120, 34, 240, 210, 147,
    154, 152, 251, 47, 13, 59, 4, 25, 89, 250, 140, 169, 120, 34, 240, 210, 147,
    154, 152, 251, 47, 13, 59, 4, 25, 89, 250, 140, 169, 120, 34, 240, 210, 147,
    154, 152, 251, 47, 13, 59, 4, 25, 89, 250, 140, 169, 120, 34, 240, 210, 147,
    154, 152, 251, 47, 13, 59, 4, 25, 89, 250, 140, 169, 120, 34, 240, 210, 147,
    154, 152, 251, 47, 13, 59, 4, 25, 89, 250, 140, 169, 120, 34, 240, 210, 147,
    154, 152, 251, 47, 13, 59, 4, 25, 89, 250, 140, 169, 120, 34, 240, 210, 147,
    154, 152, 251, 47, 13, 59, 4, 25, 89, 250, 140, 169, 120, 34, 240, 210, 147,
    154, 152, 251, 47, 13, 59, 4, 25, 89, 250, 140, 169, 120, 34, 240, 210, 147,
    154, 152, 251, 47, 13, 59, 4, 25, 89, 250, 140, 169, 120, 34, 240, 210, 147,
    154, 152, 251, 47, 13, 59, 4, 25, 89, 250, 140, 169, 120, 34, 240, 210, 147,
    154, 152, 251, 47, 13, 59, 4, 25, 89, 250, 140, 169, 120, 34, 240, 210, 147,
    154, 152, 251, 47, 13, 59, 4, 25, 89, 250, 140, 169, 120, 34, 240, 210, 147,
])


app.get("/", async (req, res) => {
    var canvas = Canvas.createCanvas(320, 320)
    var ctx = canvas.getContext('2d')

    clock(ctx)

    try {
        const r = generator().generateFromHash(hashdata)
        console.log("gen ok", r)
    } catch (err) {
        console.log("gen error", err)
    }

    // console.log(r)
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.end(
        //'<meta http-equiv="refresh" content="1;" />' +
        '<img src="' + canvas.toDataURL() + '" />'
    )
})

app.listen(PORT)

// http.createServer(function (req, res) {
//     console.log(req.url)


    // clock(ctx)

    // try {
    //     const r = generator().generateFromHash(hashdata).buffer
    // } catch (err) {
    //     console.log("gen error", err)
    // }

    // console.log(r)
    // res.writeHead(200, { 'Content-Type': 'text/html' })
    // res.end("bye")
    // res.end(
    //     //'<meta http-equiv="refresh" content="1;" />' +
    //     '<img src="' + canvas.toDataURL() + '" />'
    // )


// }).listen(PORT)

console.log('Server started on port ',PORT);
