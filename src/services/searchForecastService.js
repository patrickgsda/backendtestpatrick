const axios = require('axios')


exports.searchForecast = (async (req, res) => {
    try {
        const token = '20e768326c03e680f7cc4755c3244adb'
        const climaTempo = 'http://apiadvisor.climatempo.com.br/api/v1/forecast/locale'
        const response = await axios.get(`${climaTempo}/${req}/days/15?&token=${token}`)
        return response.data

    } catch (error) {   
        res.status(400).json({message: error.message})
    }
})