module.exports = {
    devServer: { watchOptions: { poll: true }, port: 8081 },
    css: {
        loaderOptions: {
            sass: {
                additionalData: `@import "@/scss/_variables.scss";`
            }
        }
    }
};
