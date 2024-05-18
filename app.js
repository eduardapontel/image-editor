const path = require('path');
const sharp = require('sharp');
const compress_images = require('compress-images');
const fs = require('fs');

let filePath = process.argv[2];
let width = Number(process.argv[3]);
let rotate;

process.argv[4] == null ? (rotate = 0) : (rotate = Number(process.argv[4]));

function resize(inputPath, outputPath, width, rotate) {
    sharp(inputPath)
        .resize({ width: width })
        .rotate(rotate)
        .toFile(outputPath, (error) => {
            if (error) {
                console.log(error);
            } else {
                console.log('Image resized successfully!');
                checkFile(outputPath);
                compress(outputPath, './compressed/');
            }
        });
}

function compress(inputPath, outputPath) {
    compress_images(
        inputPath,
        outputPath,
        { compress_force: false, statistic: true, autoupdate: true },
        false,
        { jpg: { engine: 'mozjpeg', command: ['-quality', '60'] } },
        { png: { engine: 'pngquant', command: ['--quality=20-50', '-o'] } },
        { svg: { engine: 'svgo', command: '--multipass' } },
        { gif: { engine: 'gifsicle', command: ['--colors', '64', '--use-col=web'] } },
        function (error, completed, statistic) {
            // console.log('-------------');
            // console.log(error);
            // console.log(completed);
            // console.log(statistic);
            // console.log('-------------');

            fs.unlink(inputPath, (error) => {
                if (error) {
                    console.log(error);
                } else {
                    // console.log(`File ${inputPath} deleted successfully`);
                }
            });
        }
    );
}

function checkFile(outputPath) {
    outputPath = './compressed/' + path.basename(outputPath);
    if (fs.existsSync(outputPath)) {
        fs.unlinkSync(outputPath);
        // console.log(`File ${outputPath} deleted successfully`);
    }
}

resize(filePath, './temp/output_resize.jpg', width, rotate);
