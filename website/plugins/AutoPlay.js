function AutoPlay(){}

AutoPlay.prototype.run = function(player) {
    if (!player.muted){
        //El setter funciona como un atributo, no como una función
        player.muted = true
    }
    player.play()
}

export default AutoPlay