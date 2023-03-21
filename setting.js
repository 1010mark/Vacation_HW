module.exports = {
    sass_path: {
        file: "public/developing/stylesheet/**/*.+(sass|scss)",
        directory: "public/developing/stylesheet",
        dest: "public/product/stylesheet"
    },
    js_path: {
        file: "public/developing/javascript/**/*.js",
        directory: "public/developing/javascript",
        dest: "public/product/javascript"
    },
    img_path: {
        file: "public/developing/image/**/*.*",
        directory: "public/developing/image",
        dest: "public/product/image"
    },
    font_path: {
        file: "public/developing/font/**/*.*",
        directory: "public/developing/font",
        dest: "public/product/font"
    }
}