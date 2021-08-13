const { obsStartStreamToTwitch, obsStopStreamToTwitch } = require('d:/Workspaces/streamlabs/obs-twitch-stream-node/build/Debug/obs_twitch_stream_node.node')

window.onload = () => {
    document.getElementById("start").addEventListener("click", () => {
        obsStartStreamToTwitch(document.getElementById("key").value)
    })
    document.getElementById("stop").addEventListener("click", () => {
        obsStopStreamToTwitch()
    })
}