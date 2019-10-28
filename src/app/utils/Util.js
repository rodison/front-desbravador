import moment from 'moment-timezone'
import { INFO_LOGTYPE } from '../constants/Constant'

export const momentToLog = () => (
    moment().format('YYYYMMDD HH:mm:ss')
)

export const rLog = (textMessage, itemToLog, logtype = INFO_LOGTYPE) => {
    let formattedItem = ''
    if (itemToLog === null) {
        formattedItem = null
    } else if (itemToLog && typeof itemToLog === 'object') {
        try {
            formattedItem = JSON.stringify(itemToLog)
        } catch (error) {
            formattedItem = itemToLog
        }
    } else if (itemToLog) {
        formattedItem = itemToLog
    }
    console.log(`\n${momentToLog()} [${logtype}] ${textMessage}`, formattedItem)
}

// export const dateToMoment = dateToBeConverted => {
//     let convertedMoment = null
//     if (dateToBeConverted) {
//         convertedMoment = moment.utc(dateToBeConverted)
//     }
//     return convertedMoment
// }

// export const todayMoment = () => (
//     // rLog('moment:', moment())
//     // rLog('moment format:', moment().format('YYYY-MM-DD HH:mm:ss'))
//     // rLog('moment utc:', moment.utc())
//     // rLog('moment utc:', moment.utc().format('YYYY-MM-DD HH:mm:ss'))
//     // rLog('moment utc tz:', moment.utc().tz('America/Sao_Paulo'))
//     // rLog('moment tz:', moment().tz('America/Sao_Paulo'))
//     // rLog('moment guess:', moment.tz.guess())
//     // rLog('moment tz 2:', moment.tz(moment.utc(), moment.tz.guess())
//     // .format('YYYY-MM-DD HH:mm:ss'))
//     moment.utc()
// )

// export const momentToTextUtc = (momentUtc, format) => {
//     if (!momentUtc) {
//         return ''
//     }
//     const formattedMoment = momentUtc.format(format)
//     // rLog('momentToTextUtc format:', formattedMoment)
//     return formattedMoment
// }

// export const momentToTextLocalTz = (momentUtc, format) => {
//     if (!momentUtc) {
//         return ''
//     }
//     const formattedMoment = moment.tz(momentUtc, moment.tz.guess()).format(format)
//     // rLog('momentToTextLocalTz format:', formattedMoment)
//     return formattedMoment
// }

// export const textToMoment = (dateTextToBeConverted) => {
//     let convertedMoment = null
//     if (dateTextToBeConverted && dateTextToBeConverted !== '') {
//         convertedMoment = moment.utc(dateTextToBeConverted, 'DD [de] MMMM [de] YYYY')
//     }
//     return convertedMoment
// }

// export const momentToText = momentToConvert => {
//     if (momentToConvert) {
//         const momentConverted = momentToConvert.format('DD [de] MMMM [de] YYYY')
//         return momentConverted
//     }
//     return ''
// }

// export const momentToDate = momentToConvert => {
//     // rLog('momentToDate moment:', momentToConvert)
//     if (!momentToConvert) {
//         return null
//     }
//     const convertedDate = momentToConvert.toDate()
//     // rLog('momentToDate date:', convertedDate)
//     return convertedDate
// }

// export const todayInMilisseconds = () => (
//     Date.now()
// )

// export const todayInMilissecondsString = () => (
//     `${todayInMilisseconds()}`
// )

// export class PopuloException {
//     constructor(constant, constantName, idObject, textToAppend = '') {
//         this.message =
//             `${constant[idObject.deviceLocale]}${textToAppend} - [${constantName}]`
//         // this.message =
//         //     `${constant[user.fingerprint.deviceLocale]}${textToAppend} - [${constantName}]`
//     }
//     toString() {
//         return this.message
//     }
// }

// export const searchTextInMongo = searchText => {
//     const searchTextArray = searchText.split('')
//     return searchTextArray.reduce((previousValue, arrayItem) => (
//         `${previousValue}(${arrayItem.toUpperCase()}|${arrayItem.toLowerCase()})`
//     ), '')
// }

// export const jsonToText = json => (
//     JSON.stringify(json)
// )
