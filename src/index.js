import { gcpPubSub } from './infrastructure/pubsub'
import { exec } from 'child_process'

const onMessage = (msg) => {
    exec(command, (err, stdout, stderr) => {
        console.log({ err })
        console.log({ stderr })
        console.log({ stdout })
    })
}

const command = `sudo uv4l -nopreview --auto-video_nr --driver raspicam --encoding mjpeg --width 640 --height 480 --framerate 40 --server-option '--port=9090' --server-option '--max-queued-connections=30' --server-option '--max-streams=25' --server-option '--max-threads=29' --server-option '--user-password='${process.env.UV4L_SERVER_PASSWORD}`

gcpPubSub.start({ onMessage })

