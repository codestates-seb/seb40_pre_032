const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
	app.use(
		createProxyMiddleware('/api', {
			target:
				'http://ec2-15-165-146-60.ap-northeast-2.compute.amazonaws.com:8080/',
			changeOrigin: true,
		}),
	);
};
