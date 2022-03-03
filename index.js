const http = require("http");
const express = require("express");
const ytdl = require("ytdl-core");
const fs = require("fs");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));

const getVideos = (formats) => {
    let videos = formats.filter((format, i) => {
        return format.hasVideo && format.hasAudio;
    });
    videos.reverse();
    return videos;
}

app.get("/", async (req, res) => {
    const vidUrl = req.query.url;
    if (!vidUrl){
        return res.render("index", {
            ready: false
        });
    }
    const vidId = vidUrl.slice(-11);
    try {
        const vidInfo = await ytdl.getInfo(vidUrl);
        const videos = getVideos(vidInfo.formats);
        res.render("index", {
            ready: true,
            vidId,
            videos
        });
    } catch(err){
        res.render("errors/error", {
            title: "URL Not Found",
           errMsg: err 
        });
    }
});

app.use("/", (req, res) => {
    res.status(404);
    res.send("<h1 style='text-align: center;'>404 Not Found</h1>");
});

app.listen(process.env.PORT || port, () => {
    console.log(`Server running at port ${port}...`)
});