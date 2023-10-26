"use strict";

let nextImage = null;
let slidenumber = 0;

const shuffleImages= () => {
        slidenumber = (slidenumber + 1) % slides.length;
        nextImage = slides[slidenumber];
        $("#slide_link").attr("href",nextImage.url);
        $("#slide_image").attr("src",nextImage.src);
        $("#slide_text").html(nextImage.caption); 
};

$(document).ready( () => {
    shuffleImages();
    setInterval(shuffleImages,4000);
});
