var emailIdx = 0

var gDefualtEmails = [
    { id: emailIdx++, from: 'dani', subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt: 1551133930594 },
    { id: emailIdx++, from: 'dani', subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt: 1551133930594 },
    { id: emailIdx++, from: 'moshe', subject: 'how are you?', body: 'i just wanted to know how are you ?', isRead: true, sentAt: 1551133930594 },
    { id: emailIdx++, from: 'moshe', subject: 'how are you?', body: 'i just wanted to know how are you ?', isRead: true, sentAt: 1551133930594 },
    { id: emailIdx++, from: 'yuval', subject: 'tnx for your help', body: 'hi thank you very much', isRead: false, sentAt: 1551133930594 }
]


export default {
    query,
    getEmailById
}

function getEmailById(emailId) {
    const email = gDefualtEmails.find(email => email.id === emailId);
    return Promise.resolve(email)
}

function query() {
    return Promise.resolve(gDefualtEmails)
}