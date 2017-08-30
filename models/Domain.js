const keystone = require('keystone');
const Types = keystone.Field.Types;

/**
 * Domain Model
 * =============
 */

const Domain = new keystone.List('Domain');

Domain.add({
	name: { type: String, required: true, default: '', initial: true },
	desc: { type: String, initial: true },
	expirationDate: {
		type: Types.Date,
		initial: true,
		// format: 'YYYY-MM-DD',
	},
	createdAt: { type: Date, default: Date.now },
});

Domain.defaultColumns = 'name, desc, expirationDate, createdAt';
Domain.register();
