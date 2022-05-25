const songs = [
    'Chanel', 'In My Room', 
    'Biking', 'Where This Flower Blooms', 
    'Nights', '911 / Mr.Lonely', 
    'Nikes', 'Ivy', 
    'Pink + White', 'Solo', 
    'DHL', 'White Ferrari', 
    'Self Control'
]

const songsLinks = [
    'https://open.spotify.com/track/6Nle9hKrkL1wQpwNfEkxjh?si=976b398490f1411d', 
    'https://open.spotify.com/track/4S4Mfvv03M1cHgIOJcbUCL?si=de4fda8c5d2c430a', 
    'https://open.spotify.com/track/2q0VexHJirnUPnEOhr2DxK?si=6aca0a9962a84f9b', 
    'https://open.spotify.com/track/6KuXb26rHuRy3ZDse1VRmx?si=6ac17b2a325f40d0', 
    'https://open.spotify.com/track/7eqoqGkKwgOaWNNHx90uEZ?si=f6bc554eca384241',
    'https://open.spotify.com/track/4bEcoz1OcfMgUbp2ft8ieQ?si=b2e7f20fe4ea42ff', 
    'https://open.spotify.com/track/19YKaevk2bce4odJkP5L22?si=089a48d881834efd', 
    'https://open.spotify.com/track/2ZWlPOoWh0626oTaHrnl2a?si=3dc12344723f4d34', 
    'https://open.spotify.com/track/3xKsf9qdS1CyvXSMEid6g8?si=576db762707c4a17', 
    'https://open.spotify.com/track/35xSkNIXi504fcEwz9USRB?si=50790902b7d342c1', 
    'https://open.spotify.com/track/2INhKpUdzh7v0j041gZNsz?si=b7c7362ed4a34e84', 
    'https://open.spotify.com/track/2LMkwUfqC6S6s6qDVlEuzV?si=5d318b9bb4644148', 
    'https://open.spotify.com/track/5GUYJTQap5F3RDQiCOJhrS?si=234a72c1914041d9'
]


const btn = document.querySelector('.btn')
const songsList = document.querySelector('.mix')
const songsAmount = document.querySelector('.header-descr')


songsAmount.innerHTML = `${songs.length} great songs`


btn.addEventListener('click', () => {
    createSongsTable(songs)
    songsList.classList.remove('hide');
    btn.classList.add('hide')
})


function createSongsTable(list){
    list.forEach(function (song, index){
        let li = document.createElement('li')
        li.classList.add('song')
        li.innerHTML = `<a target='_blank' href='${link(songsLinks, index)}'>${song}</a>`
        songsList.append(li)
    })
}

function link(list, index){
    return list[index]
}