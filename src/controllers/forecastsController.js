const Forecast = require('../models/forecastModel')
const DateController = require('./dateController')
const CepController = require('./cepController')

const searchCepService = require('../services/searchCepService')
const searchLocaleIdService = require('../services/searchLocaleIdService')
const searchForecastService = require('../services/searchForecastService')


exports.post = async (req, res) => {
    // const forecastData = new Forecast({
    //     localeId: localeId,
    //     date: data,
    //     forecast: forecast
    // })
    //     const newForecast = await forecast.save()
    //     res.status(201).json(newForecast)
    // } catch (error) {
    //     res.status(400).json({message: error.message})
    // }

        try {
            const cep = req.body.cep
            const data = req.body.data
            const searchCep = await searchCepService.searchCep(cep)
            const searchLocaleId = await searchLocaleIdService.searchLocaleId(searchCep)
            const localeId = searchLocaleId[0].id
            const searchForecast = await searchForecastService.searchForecast(localeId)
            const forecast = await DateController.filterDate(data, searchForecast)

            const forecastData = new Forecast({
                localeId: localeId,
                date: data,
                forecast: forecast
            })
            const keys = [localeId, data]
            console.log(keys)
            findForecast = await Forecast.findOneAndUpdate(keys, forecast)  
            if(!findForecast){
                console.log('oi')
                await forecastData.save()
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

    else if(cep){
        isValidCepType = await CepController.validCepType(cep)

        if(!isValidCepType){
            return res.status(404).json({message: "'cep' not the valid format, valid format: 92032023"})
        }
    }

    else if(data){
        isValidDateType = await DateController.validDateType(data)
        isValidDatePeriod = await DateController.validDatePeriod(data)

        if(!isValidDateType){
            return res.status(404).json({message: "'data' not the valid format, valid format: YYYY-MM-DD"})
        }
        if(!isValidDatePeriod){
            return res.status(404).json({message: "Date has to be in the future and not longer than 7 days."})
        }
    }

    next()
}

