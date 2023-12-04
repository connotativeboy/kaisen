const rangeVideo = (totalSize, chunkSize) => {
    // totalSize是文件总大小
    // chunkSize是你想要分片的大小
    const numChunks = Math.ceil(totalSize/chunkSize) // 向上取整
    let chunk = new Blob()
    let index = 0
    
    send()
    function send () {
        if (index >= numChunks) return
        const start = index * chunkSize
        const end = Math.min(start + chunkSize - 1, totalSize - 1)
        fetch('videoUrl', {
            headers: { Range: `bytes=${start}-${end}` }
        }).then(res => {
            index++
            return res.blob()
        }).then(blob => {
            send()
            chunk = new Blob([chunk, blob], { type: 'video/m3u8' })
            const url = URL.createObjectURL(chunk)
            const currentTime = video.currentTime // dom获取也好，$ref获取也好
            video.src = url
            video.currentTime = currentTime
            video.play()
        })
    }
}
const code = () => {
    let allSize = 200000
    let chunkSize = 50000
    let chunk = new Blob()
    let index = 0
    let Num = Math.ceil(allSize / chunkSize)

    send()
    function send() {
        if (index >= Num) return 
        let start = chunkSize * index
        let end = Math.min(start + chunkSize - 1, allSize - 1)
        fetch('videoUrl', {
            headers: { Range: `bytes=${start}-${end}` }
        }).then(res => {
            index++
            return res.blob()
        }).then(blob => {
            send()
            chunk = new Blob([chunk, blob], { type: 'video/m3u8' })
            const url = URL.createObjectURL(chunk)
            const currentTime = video.currentTime
            video.src = url
            video.currentTime = currentTime
            video.play()
        })
    }
}
function videoChunk () {
    let allSize = 199999
    let chunkSize = 20000
    let chunk = new Blob()
    let index = 0
    let num = Math.ceil(allSize / chunkSize)
    
    function send() {
        if (index >= num) return
        let start = chunkSize * index
        let end = Math.min(allSize, start + chunkSize - 1)
        fetch('videoUrl', {
            headers: { Range: `bytes:${start}-${end}` }
        }).then(res => {
            index++
            return res.blob()
        }).then(blob => {
            send()
            chunk = new Blob([chunk, blob], { type: 'video/m3u8' })
            url = URL.createObjectURL(chunk)
            let currentTime = video.currentTime
            video.src = url
            video.currentTime = currentTime
            video.play()
        })
    }
}