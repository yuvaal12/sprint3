import utilService from './utilService.js'
import storageService from './storageService.js'
const KEY_Email = 'emails';


var gEmails = storageService.load(KEY_Email);

var gDefualtEmails = [
    { id: utilService.makeId(), from: 'dani', isRe: false, subject: 'Wassap?', body: 'Cool  COOL', isRead: false, isStar: false, isShowen: false, isRemove: false, sentAt: timeNow() },
    { id: utilService.makeId(), from: 'dani', isRe: false, subject: 'Wassap?', body: ' cool COOL', isRead: true, isStar: true, isShowen: false, isRemove: false, sentAt: timeNow() },
    { id: utilService.makeId(), from: 'dani', isRe: false, subject: 'Wassap?', body: 'Cool COOL  COOL', isRead: true, isStar: true, isShowen: false, isRemove: false, sentAt: timeNow() },
    { id: utilService.makeId(), from: 'dani', isRe: false, subject: 'Wassap?', body: 'Cool COOL ', isRead: false, isStar: true, isShowen: false, isRemove: false, sentAt: timeNow() },
    { id: utilService.makeId(), from: 'dani', isRe: false, subject: 'Wassap?', body: 'Cool COOL  COOL', isRead: false, isStar: true, isShowen: false, isRemove: false, sentAt: timeNow() },
    { id: utilService.makeId(), from: 'moshe', isRe: false, subject: 'how are you?', body: 'i  know?', isRead: true, isStar: false, isShowen: false, isRemove: false, sentAt: timeNow() },
    { id: utilService.makeId(), from: 'moshe', isRe: false, subject: 'how are you?', body: 'just wanted?', isRead: true, isStar: false, isShowen: false, isRemove: false, sentAt: timeNow() },
    { id: utilService.makeId(), from: 'yuval', isRe: false, subject: 'tnx for your help', body: 'hi thank you', isRead: false, isStar: true, isShowen: false, isRemove: false, sentAt: timeNow() }
]


export default {
    query,
    getEmailById,
    removeEmail,
    saveMail,
    addEmail
}

function timeNow() {
    var d = new Date(),
        h = (d.getHours() < 10 ? '0' : '') + d.getHours(),
        m = (d.getMinutes() < 10 ? '0' : '') + d.getMinutes();
    var time = h + ':' + m;

    return time
}

function getEmailById(emailId) {
    const email = gEmails.find(email => email.id === emailId);
    return Promise.resolve(email)
}

function removeEmail(emailId) {

    const emailIdx = gDefualtEmails.findIndex(email => email.id === emailId);
    gDefualtEmails.splice(emailIdx, 1);
    storageService.store(KEY_Email, gDefualtEmails);
    return Promise.resolve();
}

function _getIdxById(emailId) {
    return gEmails.findIndex(email => email.id === emailId)
}


function getEmailById(emailId) {
    const email = gEmails.find(email => email.id === emailId);
    return Promise.resolve(email)
}

function saveMail(emailId, filed, value) {

    getEmailById(emailId)
        .then((email) => {
            email[filed] = value
            var idx = _getIdxById(emailId)
            gEmails[idx] = email
        })
    storageService.store(KEY_Email, gEmails);
}

function addEmail(email) {
    var newEmail = _createEmail(email)
    gEmails.push(newEmail);
    storageService.store(KEY_Email, gEmails);
    return newEmail;
}


function _createEmail(newEmail) {

    return {
        id: utilService.makeId(),
        from: newEmail.from,
        subject: newEmail.subject,
        body: newEmail.body,
        isRead: false,
        isStar: false,
        isShowen: false,
        isRemove: false,
        isRe: true,
        sentAt: timeNow(),
    };
}

function query(filterBy = null) {

    if (!gEmails) gEmails = gDefualtEmails;
    var emails = gEmails;
    if (!filterBy) return Promise.resolve(gEmails)
    else {
        var { body } = filterBy
        if (filterBy.body === body) {
            emails = gEmails.filter(email => email.body.toLowerCase().includes(body))
        }
        if (filterBy.read === 'read') {
            emails = gEmails.filter(email => email.isRead === true)
        }
        if (filterBy.unread === 'unread') {
            emails = gEmails.filter(email => email.isRead === false)
        }
        if (filterBy === 'star') {
            emails = gEmails.filter(email => email.isStar === true)
        }
        if (filterBy === 're') {
            emails = gEmails.filter(email => email.isRe === true)
        }
    }

    return Promise.resolve(emails);
}