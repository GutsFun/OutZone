module.exports = {
    chainWebpack: config => {
        config.module
            .rule('images')
            .use('url-loader')
            .loader('file-loader')
            .tap(options => {
                options.name = 'img/[folder]/[name].[ext]';
                return options;
            })
    }
}