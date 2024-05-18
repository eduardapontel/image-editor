# Image Editor

This is a simple Node.js program that resizes and compresses images using the `sharp` and `compress-images` libraries.

## Features

- Resize images to a specified width.
- Rotate images by a specified degree.
- Compress images using various compression engines.
- Automatically delete the original image after compression.

## Prerequisites

- Node.js installed on your machine.
- Required Node.js packages: `sharp` and `compress-images`.

## Installation

1. Clone the repository or download the project files.
2. Open a terminal in the project directory.
3. Run the following command to install the necessary packages:

   ```sh
   npm install sharp compress-images

## Usage

To use the image editor, run the following command in your terminal:

  ```sh
  node image-editor.js &lt;input-file-path&gt; &lt;width&gt; [rotate]

