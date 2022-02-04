const searchCepService = require('../services/searchCepService')


exports.validCep = async (req) => {
    regexDateAccept = new RegExp("^[0-9]{8}$")
    if(!regexDateAccept.test(req)){
        return 'isInvalidFormat'
    }
    const searchCep = await searchCepService.searchCep(req)
    if(searchCep.erro){
        return 'isInvalidCep'
    }
}