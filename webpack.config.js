const {join} = require('path');
const SvgSpriteLoaderPlugin = require('svg-sprite-loader/plugin');

module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.svg$/,
                loader: 'svg-sprite-loader',
                options: {
                    extract: true,
                    spriteFilename: 'sprite.svg',
                },
            },
        ],
    },
    output: {
        path: join(__dirname, 'dist'),
        filename: 'build.js',
    },
    plugins: [
        new SvgSpriteLoaderPlugin({plainSprite: true}),
    ],
};
