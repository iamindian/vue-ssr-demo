const createApp = require('./app')
server.get('*', (req, res) => {
	const context = { url: req.url }
	const app = createApp(context)
	renderer.renderToString(app, (err, html) => {
		res.end(html)
	})
})
