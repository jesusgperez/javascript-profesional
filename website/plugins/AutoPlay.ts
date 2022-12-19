import MediaPlayer from "../assets/MediaPlayer"
class AutoPlay {
    constructor() { }
    run(player:MediaPlayer) {
        if (!player.media.muted) {
            //El setter funciona como un atributo, no como una función
            player.media.muted = true
        }
        player.play()
    }
}


export default AutoPlay