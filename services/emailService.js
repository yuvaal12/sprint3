import utilService from './utilService.js'
import storageService from './storageService.js'
const KEY_Email = 'emails';


var emailIdx = 0
var gEmails = storageService.load(KEY_Email);

var gDefualtEmails = [
    { id: utilService.makeId(), from: 'dani', subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt: 1551133930594 },
    { id: utilService.makeId(), from: 'dani', subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt: 1551133930594 },
    { id: utilService.makeId(), from: 'moshe', subject: 'how are you?', body: 'i just wanted to know how are you ?', isRead: true, sentAt: 1551133930594 },
    { id: utilService.makeId(), from: 'moshe', subject: 'how are you?', body: 'i just wanted to know how are you ?', isRead: true, sentAt: 1551133930594 },
    { id: utilService.makeId(), from: 'yuval', subject: 'tnx for your help', body: 'hi thank you very much', isRead: false, sentAt: 1551133930594 }
]


export default {
    query,
    getEmailById,
    removeEmail
}

function getEmailById(emailId) {
    const email = gDefualtEmails.find(email => email.id === emailId);
    return Promise.resolve(email)
}

function _getIdxById(emailId) {
    return gDefualtEmails.findIndex(email => email.id === emailId)
}

function removeEmail(emailId) {
    const emailIdx = gDefualtEmails.findIndex(book => book.id === emailId);
    gDefualtEmails.splice(emailIdx, 1);
    storageService.store(KEY_Email, gDefualtEmails);
    return Promise.resolve();
}

function query(filterBy = null) {

    if (!gEmails) gEmails = gDefualtEmails;
    var emails = gEmails;
    if (!filterBy) return Promise.resolve(gEmails)
    else {
        var { body } = filterBy
        emails = gEmails.filter(email => email.body.toLowerCase().includes(body))

    }
    return Promise.resolve(emails);
}