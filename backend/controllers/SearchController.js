const Dev = require('../models/Dev');

module.exports = {
    async index(request, response){
        console.log(request.query);
        // Buscar todos os devs num raio de 10Km
        // Filtrar por tecnologia

        return response.json({ devs: [] });
    }
}