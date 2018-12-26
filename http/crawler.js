var http = require('http')
var url = 'http://www.imooc.com/learn/348'
var cheerio = require('cheerio')

function filterChapters (html) {
  var $ = cheerio.load(html)
  var chapters = $('.course-wrap')
  var courseData = []
  chapters.each(function (item) {
    var chapter = $(this)
    var chapterTitle = chapter.find('h3').text()
    var chapterData = {
      chapterTitle: chapterTitle,
      videos: []
    }
    var videos = chapter.find('.video a')
    videos.each(function (v) {
      var video = $(this)
      var videoTitle = video.text().trim()
      var videoId = video.attr('href').split('video/')[1]
      chapterData.videos.push({
        videoTitle: videoTitle,
        videoId: videoId
      })
    })
    courseData.push(chapterData)
  })
  return courseData
}

function printCourseInfo (courseData) {
  courseData.forEach(function (item, index) {
    var chapterTitle = item.chapterTitle
    console.log(chapterTitle+'\n')
    item.videos.forEach(function (video) {
      console.log(' 【'+video.videoId+'】'+video.videoTitle+'\n')
    })
  })
}

http.get(url, function (res) {
  var html = ''
  res.on('data', function (data) {
    html += data
  })
  res.on('end', function () {
    printCourseInfo(filterChapters(html))
  })
}).on('error', function (err) {
  console.log('获取课程数据出错')
})