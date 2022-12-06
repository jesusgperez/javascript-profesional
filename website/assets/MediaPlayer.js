function MediaPlayer(config){
    this.media = config.el
    this.plugins = config.plugins || []

    this._initPlugins();
}

MediaPlayer.prototype._initPlugins = function(){
    //Se crea un objeto con los atributos que queremos pasar, un subconjunto del objeto más grande
    const player = {
        play: () => this.play(),
        pause: () => this.pause(),
        //Se añaden las propiedades del this que se quieren incluir
        media: this.media,
        //Obtiene un valor del objeto
        get muted() {
            return this.media.muted
        },
        //Asigna un valor al objeto (propiedad virutal)
        set muted(value) {
            this.media.muted = value
        }
    }
    this.plugins.forEach(plugin =>{
        plugin.run(player)
    })
}

MediaPlayer.prototype.play = function() {
    this.media.play()
}

MediaPlayer.prototype.pause = function() {
    this.media.pause()
}

MediaPlayer.prototype.mute = function() {
    this.media.muted = true
}

MediaPlayer.prototype.unmute = function() {
    this.media.muted = false
}

MediaPlayer.prototype.togglePlay = function() {
    if (this.media.paused) {
        this.play()
    } else {
        this.pause()
    }
}

MediaPlayer.prototype.toggleMute = function() {
    if (this.media.muted) {
        this.unmute()
    } else {
        this.mute()
    }
}

export default MediaPlayer