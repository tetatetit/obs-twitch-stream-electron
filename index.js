const { app, BrowserWindow } = require('electron')

app.whenReady().then(() => {
    const win = new BrowserWindow({
        width: 800,
        height: 600
    })
    win.loadFile('index.html')

    require('c:/Program Files/obs-twitch-stream-node/obs_twitch_stream_node.node')
        .obsBroadcast()

})
