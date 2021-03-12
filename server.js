const { createServer } = require('https')
// const { parse } = require('url')
const next = require('next')
const fs = require('fs')
const log = require('next/dist/build/output/log')

const port = parseInt(process.env.PORT, 10) || 3177
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

/**
 * Secure your local development server with HTTPS (Next.JS):
 * https://anmagpie.medium.com/secure-your-local-development-server-with-https-next-js-81ac6b8b3d68
 */
const httpsOptions = {
  key: fs.readFileSync('./localhost.key'),
  cert: fs.readFileSync('./localhost.crt'),
}

app.prepare().then(() => {
  createServer(httpsOptions, (req, res) => {
    /**
     *  url.parse is deprecated:
     *  https://nodejs.org/api/url.html#url_url_parse_urlstring_parsequerystring_slashesdenotehost
     */
    // const parsedUrl = parse(req.url, true)
    const parsedUrl = new URL(req.url, `https://localhost:${port}`)
    handle(req, res, parsedUrl)
  }).listen(port, (err) => {
    if (err) throw err
    log.ready(`started server on port ${port}, url: https://localhost:${port}`)
  })
})
