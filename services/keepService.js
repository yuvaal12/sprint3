import utilService from './utilService.js'
import storageService from './storageService.js'

const keepsTypes = ['', 'text', 'todos', 'coverOnly']
const KEY_KEEP = 'notes';
var gKeeps = storageService.load(KEY_KEEP);

export default {
    query,
    getKeepById,
    removeKeep,
    addKeep,
    getTypes,
    saveKeep
}

function getTypes() {
    return keepsTypes;
}

function getKeepById(keepId) {
    const keep = gKeeps.find(keep => keep.id === keepId);
    return Promise.resolve(keep)
}

function _getIdxById(keepId) {
    return gKeeps.findIndex(keep => keep.id === keepId)
}
function saveKeep(keepId, filed, value) {
    getKeepById(keepId)
        .then((keep) => {
            keep[filed] = value
            console.log(keep);
            var idx = _getIdxById(keepId)
            gKeeps[idx] = keep
        })
    storageService.store(KEY_KEEP, gKeeps);
}

function removeKeep(keepId) {
    const keepIdx = _getIdxById(keepId);
    gKeeps.splice(keepIdx, 1);
    storageService.store(KEY_KEEP, gKeeps);
    return Promise.resolve();
}

function query(filterBy = null) {
    if (!gKeeps) gKeeps = _createKeeps();
    var keeps = gKeeps;
    if (!filterBy) return Promise.resolve(gKeeps)
    else {
        var { title, isPinned, type } = filterBy
        // isPinned = isPinned ? isPinned : false
        // type = type ? type : ''
        console.log(filterBy);
        keeps = gKeeps.filter(
            (keep) => {
                console.log(title,type,isPinned);
                if (keep.type != 'coverOnly') {
                    (keep.info.title.includes(title.toLowerCase()))
                } else
                    keep
            })
    }
    return Promise.resolve(keeps);
}


function _createKeeps() {
    const notes = [
        {
            type: 'text',
            isCover: true,
            cover: {
                typeC: 'img',
                url: './assets/img/logo.png'
            },
            isPinned: false,
            bgColor: '#363636',
            textColor: 'White',
            info: {
                title: 'is it working?',
                body: 'Fullstack?'
            },
        },
        {
            type: 'todos',
            isCover: false,
            isPinned: true,
            bgColor: '#363636',
            textColor: 'White',
            info: {
                title: 'and now?',
                body:
                    [
                        { txt: "Do that", doneAt: null, id: utilService.makeId() },
                        { txt: "Do this", doneAt: 137111811, id: utilService.makeId() },
                        { txt: "Do those", doneAt: 187535141, id: utilService.makeId() }
                    ]
            },
        },
        {
            type: 'coverOnly',
            bgColor: '#363636',
            textColor: 'White',
            cover: {
                typeC: 'audio',
                url: './assets/audio/Yay.mp3'
            },
            isPinned: false,
        },
        {
            type: 'coverOnly',
            bgColor: '#363636',
            textColor: 'White',
            cover: {
                typeC: 'video',
                url: './assets/video/sielnce.mp4'
            },
            isPinned: true,
        },
    ]
    gKeeps = [];
    notes.forEach(note => {
        gKeeps.push(_createKeep(note))
    });
    storageService.store(KEY_KEEP, gKeeps);
}

function addKeep(note) {
    var modalNote = {
        type: note.type,
        info: {
            title: note.title,
            body: note.body
        },
        cover: {
            typeC: note.typeC,
            url: note.url
        }
    }
    var newKeep = _createKeep(modalNote, true)
    gKeeps.push(newKeep);
    storageService.store(KEY_KEEP, gKeeps);
}

function _createKeep(note, isByUser = false) {
    if (note.type === 'coverOnly') {
        note.info = ''
    } else if (note.type === 'todos' && isByUser) {
        var str = note.info.body
        var array = str.split('.')
        var body = []
        body.push()
        array.forEach((todo) => {
            var obj = {
                txt: todo,
                id: utilService.makeId(),
                doneAt: null
            }
            body.push(obj)
        })
        note.info = {
            title: note.info.title,
            body
        }
    }

    if (!note.cover) note.cover = null
    if (!note.isPinned) note.isPinned = false
    if (!note.bgColor) note.bgColor = '#363636'
    if (!note.textColor) note.textColor = 'White'
    return {
        id: utilService.makeId(),
        type: note.type,
        cover: note.cover,
        isPinned: note.isPinned,
        info: note.info,
        bgColor: note.bgColor,
        textColor: note.textColor
    }
}
