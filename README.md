# Image Editor

This is a simple Node.js program that resizes and compresses images using the `sharp` and `compress-images` libraries.

## Features

- Resize images to a specified width.
- Rotate images by a specified degree.
- Compress images using various compression engines.

## Prerequisites

- Node.js installed on your machine.
- Required Node.js packages: `sharp` and `compress-images`.

## Installation

1. Clone the repository or download the project files.
2. Open a terminal in the project directory.
3. Run the following command to install the necessary packages:

```sh
npm install sharp compress-images
```

## Usage

To use the image editor, run the following command in your terminal:

```sh
node app.js <input-file-path> <width> [rotate]
```

- `<input-file-path>`: The path to the image you want to resize.

- `<width>`: The new width of the image.

- `[rotate]` (optional): The degree to rotate the image. If not provided, the default is 0.

## Example

```sh
node app.js ./image.jpg 500 90
```

This will resize the image image.jpg to a width of 800 pixels and rotate it by 90 degrees. The resized image will be saved to ./temp/output_resize.jpg and then compressed to ./compressed/.

## How to Contribute

If you encounter any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.
