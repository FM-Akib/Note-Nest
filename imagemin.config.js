const imagemin = require('imagemin');
const imageminPngquant = require('imagemin-pngquant');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminSvgo = require('imagemin-svgo');
const imageminGifsicle = require('imagemin-gifsicle');

(async () => {
    await imagemin(['src/assets/*.{jpg,png,svg,gif}'], {
        destination: 'build/assets',
        plugins: [
            imageminPngquant({
                quality: [0.6, 0.8] // Adjust the quality as per your needs
            }),
            imageminMozjpeg({
                quality: 75 // Adjust the quality as per your needs
            }),
            imageminSvgo(),
            imageminGifsicle()
        ]
    });

    console.log('Images optimized');
})();
