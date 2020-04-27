import utilService from './utilService.js'
import storageService from './storageService.js'
const KEY_Email = 'emails';


var emailIdx = 0

var gEmails = [
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
    const email = gEmails.find(email => email.id === emailId);
    return Promise.resolve(email)
}

function _getIdxById(emailId) {
    return gEmails.findIndex(email => email.id === emailId)
}

function removeEmail(emailId) {
    const emailIdx = gEmails.findIndex(book => book.id === emailId);
    gEmails.splice(emailIdx, 1);
    storageService.store(KEY_Email, gEmails);
    return Promise.resolve();
}

function query() {
    return Promise.resolve(gEmails)
}