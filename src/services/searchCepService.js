const axios = require('axios')


exports.searchCep = (async (req, res) => {
        try {
            const response = await axios.get(`http://viacep.com.br/ws/${req}/json/`)
            return response.data
        } catch (error) {
            res.status(400).json({message: error.message})
        }
    })