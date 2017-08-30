const keystone = require('keystone');
const fs = require('fs');
const path = require('path');
const _ = require('lodash');

const format = (item) => ({
	title: item.title,
	desc: item.desc,
	imageUrl: item.imageUrl && item.imageUrl.url,
	images: item.images && item.images.map(img => img.url),
	curl: item.curl,
	stype: item.stype,
	type: item.type,
	src: item.src,
	time: item.time,
});

const scriptTpl = fs.readFileSync(path.join(__dirname, '../../', 'templates/jsTpl', 'load.tpl'), 'utf8');
const compiledTpl = _.template(scriptTpl);

exports = module.exports = function (req, res) {

	keystone
		.list('Materiel')
		.model
		.find()
		.then((materiels) => {
			const data = materiels.map(format);
			const host = req.headers.host;
			const jsText = compiledTpl({ host, data });
			res.set({ 'content-type': 'application/json; charset=utf-8' });
			res.send(jsText);
		});
};
