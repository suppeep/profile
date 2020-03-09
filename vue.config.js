const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

module.exports = {
    lintOnSave: false,
    pwa: {
        name: "kreutzer",
        themeColor: "#FFCE6D",
        msTileColor: "#000000",
        appleMobileWebAppCapable: "yes",
        appleMobileWebAppStatusBarStyle: "white",
        // configure the workbox plugin
        workboxPluginMode: "InjectManifest",
        workboxOptions: {
            // swSrc is required in InjectManifest mode.
            swSrc: "public/service-worker.js"
        }
    },
    configureWebpack: {
        plugins: [
            new VuetifyLoaderPlugin()
        ]
    },
    chainWebpack: config => {
        // remove the prefetch plugin
        config.plugins.delete("prefetch");
        config.module
            .rule("vue")
            .use("vue-loader")
            .loader("vue-loader")
            .tap(options =>
                Object.assign(options, {
                    transformAssetUrls: {
                        "v-img": ["src", "lazy-src"]
                    }
                })
            );
    }
};