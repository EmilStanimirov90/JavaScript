function solve(input){
    class Songs{
        constructor(name,time){
            
            this.name = name
            this.time = time

        }
    }
    const collection = {}
    const allSongs = []

    const numberOfSOngs = input.shift()

    for(let i = 0; i < numberOfSOngs; i ++){
        const [typeList, name, time] = input.shift().split('_')
        if(!collection[typeList]){
            collection[typeList]= []
        }
        const song = new Songs(name,time)
        collection[typeList].push(song)
        allSongs.push(song)
    }

    const typeList = input.shift()
    if (typeList == 'all') {
        allSongs.forEach(song => console.log(song.name))
    } else {
        collection[typeList].forEach(song => console.log(song.name))

    }
    
    
}

solve([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite'])
solve([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater'])

solve([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all'])