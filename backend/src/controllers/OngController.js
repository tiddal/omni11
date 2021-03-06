const generateUniqueId = require('../utils/generateUniqueId');

const connection = require('../database/config/connection');

module.exports = {
	async index(request, response) {
		const ongs = await connection('ongs').select('*');
		return response.json(ongs);
	},

	async store(request, response) {
		const { name, email, whatsapp, city, country } = request.body;

		const id = generateUniqueId();

		await connection('ongs').insert({
			id,
			name,
			email,
			whatsapp,
			city,
			country
		});

		return response.status(201).json({ id });
	}
};
