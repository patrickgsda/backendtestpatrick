const searchCepService = require('../services/searchCepService')


exports.validCepType = async (req) => {
    const searchCep = await searchCepService.searchCep(cep)
    regexDateAccept = new RegExp("^[0-9]{8}$")
    return regexDateAccept.test(req)
}