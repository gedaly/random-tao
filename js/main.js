// Random Chapter

// Tao Te Ching Chapters
var chapters = [
    'Chapter 1<br />Testing',
    'Chapter 2<br />Testing 2',
    'Chapter 3<br />Testing 3'
]

// Modal Window

function newChapter() {
    var randomNumber = Math.floor(Math.random() * (chapters.length));
    document.getElementById('chapterDisplay').innerHTML = chapters[randomNumber];
}