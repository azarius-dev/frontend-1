const path = require("path");
module.exports = {
    webpack: {
        alias: {

            // base
            '@api': path.resolve(__dirname, "src/api"),
            '@assets': path.resolve(__dirname, "src/assets"),
            '@constants': path.resolve(__dirname, "src/constants"),
            '@core': path.resolve(__dirname, "src/core"),
            '@domains': path.resolve(__dirname, "src/domains"),
            '@hooks': path.resolve(__dirname, "src/hooks"),
            '@styles': path.resolve(__dirname, "src/styles"),
            '@utils': path.resolve(__dirname, "src/utils"),

            // dapp
            '@dapp': path.resolve(__dirname, "src/domains/Dapp"),

            // website - future update

        }
    }
}