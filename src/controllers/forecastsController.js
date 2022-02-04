const Forecast = require('../models/forecastModel')
const DateController = require('./dateController')
const CepController = require('./cepController')

const searchCepService = require('../services/searchCepService')
const searchLocaleIdService = require('../services/searchLocaleIdService')
const searchForecastService = require('../services/searchForecastService')


exports.post = async (req, res) => {

        try {
            const cep = req.body.cep
            const data = req.body.data
            const searchCep = await searchCepService.searchCep(cep, res)
            const searchLocaleId = await searchLocaleIdService.searchLocaleId(searchCep)
            const localeId = searchLocaleId[0].id
            const searchForecast = await searchForecastService.searchForecast(localeId)
            const forecast = await DateController.filterDate(data, searchForecast)

            const forecastData = new Forecast({
                keys: localeId+data,
                localeId: localeId,
                date: data,
                forecast: forecast
            })
            const keys = localeId+data
            findKeys = await Forecast.findOne({'keys': keys})
            if(findKeys == null){
                await forecastData.save()
            } else if(findKeys){
                await Forecast.findOneAndUpdate({'keys': keys}, {$set:{'forecast': forecast}})
            }
            res.status(200).json({message: forecast})
        } catch (error) {
            res.status(400).json({message: error.message})
        }

        

}
exports.validateReq = async (req, res, next) => {
    const cep = req.body.cep
    const data = req.body.data
    if(!cep && !data){
        return res.status(404).json({message: "'cep' and 'data' is required"})
    }
    else if(!cep){
        return res.status(404).json({message: "'cep' is required"})
    }
    else if(!data){
        return res.status(404).json({message: "'data' is required"})
    }
    
    if(data && cep){
        isValidDatePeriod = await DateController.validDatePeriod(data)
        isValidDateType = await DateController.validDateType(data)
        isValidCep = await CepController.validCep(cep)
        if(!isValidDateType){
            return res.status(404).json({message: "'data' not the valid format, valid format: YYYY-MM-DD"})
        }
        else if(!isValidDatePeriod){
            return res.status(404).json({message: "Date has to be in the future and not longer than 7 days."})
        }
        else if(isValidCep === 'isInvalidFormat'){
            return res.status(400).json({message: "'cep' not the valid format, valid format: 92032023"})
        } 
        else if(isValidCep === 'isInvalidCep'){
            return res.status(404).json({message: "'cep' not found"})
        }
    }

    next()
}


exports.get = async (req, res) => {
    try {
        return await Forecast.find()
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}
