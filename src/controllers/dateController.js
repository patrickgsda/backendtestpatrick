exports.validDatePeriod = (req) => {
    dateArray = getDates(new Date().addDays(1), new Date().addDays(8))
    return dateArray.includes(req)
}

exports.filterDate = (req, list) => {
    return list.data.find(date => {
        return date.date===req
    })
}

exports.validDateType = (req) => {
    regexDateAccept = new RegExp("^([0-9]{4}[-]?((0[13-9]|1[012])[-]?(0[1-9]|[12][0-9]|30)|(0[13578]|1[02])[-]?31|02[-]?(0[1-9]|1[0-9]|2[0-8]))|([0-9]{2}(([2468][048]|[02468][48])|[13579][26])|([13579][26]|[02468][048])00)[-]?02[-]?29)$")
    return regexDateAccept.test(req)
}

Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

Date.prototype.formatDate = function() {
    var date = new Date(this.valueOf());
    var day = String(date.getDate()).padStart(2, '0');
    var month = String(date.getMonth() + 1).padStart(2, '0');
    var year = date.getFullYear(); 
    return `${year}-${month}-${day}`

}

function getDates(startDate, stopDate) {
    var dateArray = new Array();
    var currentDate = startDate;
    while (currentDate <= stopDate) {
        dateArray.push(currentDate.formatDate());
        currentDate = currentDate.addDays(1);
    }
    return dateArray;
}