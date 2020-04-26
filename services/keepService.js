import utilService from './utilService.js'
import storageService from './storageService.js'

const keepsTypes = ['text', 'todos', 'imgOnly']
const KEY_KEEP = 'notes';
var gKeeps = storageService.load(KEY_KEEP);

export default {
    query,
    getKeepById,
    removeKeep,
    addKeep,
    getTypes
}

function getTypes(){
    return keepsTypes;
}

function getKeepById(keepId) {
    const keep = gKeeps.find(keep => keep.id === keepId);
    return Promise.resolve(keep)
}

function _getIdxById(keepId) {
    return gKeeps.findIndex(keep => keep.id === keepId)
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

function addKeep(note) {
    var newKeep = _createKeep(note)
    gKeeps.push(newKeep);
    storageService.store(KEY_KEEP, gKeeps);
    return newKeep;
}

function _createKeeps() {
    const notes = [
        {
            type: 'text',
            isCover: true,
            cover: {
                type: 'img',
                url: './assets/img/logo.png'
            },
            isPinned: false,
            info: {
                title: 'is it working?',
                body: 'Fullstack?'
            }
        },
        {
            type: 'todos',
            isCover: false,
            isPinned: true,
            info: {
                title: 'and now?',
                body:
                    [
                        { txt: "Do that", doneAt: null },
                        { txt: "Do this", doneAt: 137111811 },
                        { txt: "Do those", doneAt: 187535141 }
                    ]
            }
        },
        {
            type: 'imgOnly',
            cover: {
                type:'audio',
                url: './assets/audio/Yay.mp3'
            },
            isPinned: false,
        }
    ]
    gKeeps =[];
    notes.forEach(note => {
        gKeeps.push(_createKeep(note)) 
    });
    storageService.store(KEY_KEEP, gKeeps);
}
function _createKeep(note) {
    if(note.type === 'imgOnly') {
        var isCoverKeep = true
        var keppInfo = ''
    }
    else {
        var isCoverKeep = note.isCover;
        var keppInfo = note.info;
    }
    if(note.cover === undefined) note.cover = null

    return {
        id: utilService.makeId(),
        type: note.type,
        isCover: isCoverKeep,
        cover: note.cover,
        isPinned: note.isPinned,
        info: keppInfo,
    }
}
