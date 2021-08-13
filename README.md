# Running

1. ```
   git clone https://github.com/tetatetit/obs-twitch-stream-electron.git
   cd obs-twitch-stream-electron
   npm init
   ```
1. Change path in `run.bat` to your local dir where `libobs` [dependencies](https://obsproject.com/downloads/dependencies2019.zip) unpacked
1. Change path in `preload.js` to your local [`obs_twitch_stream_node` binary build](https://github.com/tetatetit/obs-twitch-stream-node)
1. Move whole content of the current directory (`obs-twitch-stream-electron`) into [directory where built `libobs` installed](https://github.com/tetatetit/obs-studio/tree/libobs-only#build-and-install-libobs-only-for-windows-quick-instructions) (otherwise some problem with finding `libobs` binaries as dependencies of `obs_twitch_stream_node` native module)
1. Execute `npm start` while already in `libobs` directory