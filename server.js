const { createServer } = require('https')
const { parse } = require('url')
const next = require('next')
const fs = require('fs')
const log = require('next/dist/build/output/log')

const port = parseInt(process.env.PORT, 10) || 3177
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const httpsOptions = {
  key: fs.readFileSync('./localhost.key'),
  cert: fs.readFileSync('./localhost.crt'),
}

app.prepare().then(() => {
  createServer(httpsOptions, (req, res) => {
    const parsedUrl = parse(req.url, true)
    handle(req, res, parsedUrl)
  }).listen(port, (err) => {
    if (err) throw err
    log.ready(`started server on port ${port}, url: https://localhost:${port}`)
  })
})
