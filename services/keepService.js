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
        isPinned = isPinned ? isPinned : false
        type = type ? type : 'regular'
        keeps = gKeeps.filter(
            keep => keep.title.includes(title.toLowerCase()) && type && isPinned)
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
            cover: {
                typeC: 'audio',
                url: './assets/audio/Yay.mp3'
            },
            isPinned: false,
        },
        {
            type: 'coverOnly',
            bgColor: '#363636',
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
    var newKeep = _createKeep(modalNote)
    gKeeps.push(newKeep);
    storageService.store(KEY_KEEP, gKeeps);
}

function _createKeep(note) {
    if (note.type === 'coverOnly') {
        var keppInfo = ''
    }
    else {
        var keppInfo = note.info;
    }
    if (!note.cover) note.cover = null
    if (!note.isPinned) note.isPinned = false
    if (!note.bgColor) note.bgColor = '#363636'
    return {
        id: utilService.makeId(),
        type: note.type,
        cover: note.cover,
        isPinned: note.isPinned,
        info: keppInfo,
        bgColor: note.bgColor,
    }
}
