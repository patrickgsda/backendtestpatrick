const axios = require('axios')


exports.searchLocaleId = (async (req, res) => {
    try {
        const token = '20e768326c03e680f7cc4755c3244adb'
        const climaTempo = 'http://apiadvisor.climatempo.com.br/api/v1/locale/'
        const response = await axios.get(`${climaTempo}city?name=${req.localidade}&state=${req.uf}&token=${token}`)
        return response.data

    } catch (error) {   
        res.status(400).json({message: error.message})
    }
})