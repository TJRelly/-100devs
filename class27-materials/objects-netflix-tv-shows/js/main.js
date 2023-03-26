//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods
class NetflixTVShow{
    constructor(title, genre, rating, numOfEpisodes){
        this.title = title
        this.genre = genre
        this.rating = rating
        this.numOfEpisodes = numOfEpisodes
    }
    play(){
        console.log('playing... ')
    }
    pause(){
        console.log('pausing... ')
    }
    rewind(){
        console.log('rewinding... ')
    }
}

let show = new NetflixTVShow('Happy Feet', 'fantasy', 10, 15)

show.play()
console.log(show.title)

