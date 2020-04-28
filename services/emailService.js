import utilService from './utilService.js'
import storageService from './storageService.js'
const KEY_Email = 'emails';


var gEmails = storageService.load(KEY_Email);

var gDefualtEmails = [
    { id: utilService.makeId(), from: 'dani', subject: 'Wassap?', body: 'Pick up!', isRead: false, isStar: false, sentAt: timeNow() },
    { id: utilService.makeId(), from: 'dani', subject: 'Wassap?', body: 'Pick up!', isRead: false, isStar: true, sentAt: timeNow() },
    { id: utilService.makeId(), from: 'moshe', subject: 'how are you?', body: 'i just wanted to know how are you ?', isRead: true, isStar: false, sentAt: timeNow() },
    { id: utilService.makeId(), from: 'moshe', subject: 'how are you?', body: 'i just wanted to know how are you ?', isRead: true, isStar: false, sentAt: timeNow() },
    { id: utilService.makeId(), from: 'yuval', subject: 'tnx for your help', body: 'hi thank you very much', isRead: false, isStar: true, sentAt: timeNow() }
]


export default {
    query,
    getEmailById,
    removeEmail,
    saveMail
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
    const emailIdx = gDefualtEmails.findIndex(book => book.id === emailId);
    gDefualtEmails.splice(emailIdx, 1);
    storageService.store(KEY_Email, gDefualtEmails);
    return Promise.resolve();
}

function _getIdxById(BookId) {
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
        from: 'dani',
        subject: 'Wassap?',
        body: 'Pick up!',
        isRead: false,
        isStar: false,
        sentAt: 1551133930594,

        title: newEmail.volumeInfo.title,
        subtitle: newEmail.volumeInfo.subtitle,
        authors: newEmail.volumeInfo.authors,
        publishedDate: newEmail.volumeInfo.publishedDate,
        description: newEmail.volumeInfo.description,
        pageCount: newEmail.volumeInfo.pageCount,
        categories: newEmail.volumeInfo.categories,
        thumbnail: newEmail.volumeInfo.imageLinks.thumbnail,
        language: newEmail.volumeInfo.language,
        listPrice: pricing
    };
}

function query(filterBy = null) {

    if (!gEmails) gEmails = gDefualtEmails;
    var emails = gEmails;
    if (!filterBy) return Promise.resolve(gEmails)
    else {
        var { body, read, unread } = filterBy
        emails = gEmails.filter(email => email.body.toLowerCase().includes(body))

    }
    return Promise.resolve(emails);
}