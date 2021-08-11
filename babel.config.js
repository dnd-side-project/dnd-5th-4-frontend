module.exports = function (api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo'],
        plugins: [
            [
                'module-resolver',
                {
                    root: ['./src'],
                    alias: {
                        WeatherMainImage: './assets/weatherMainImage',
                        Fonts: './assets/fonts',
                        WeatherImage: './assets/weatherImage',
                        Images: './assets/images',
                        layout: './src/layout',
                        components: './src/components',
                        styles: './src/styles',
                        pages: './src/pages',
                        until: './src/untils',
                    },
                },
            ],
        ],
    };
};
