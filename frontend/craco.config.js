const path = require('path');

const resolvePath = p => path.resolve(__dirname, p)

module.exports = {
    webpack: {
        alias: {
            '@components': resolvePath('./src/Components'),
            '@api': resolvePath('./src/APIs'),
            '@utils': resolvePath('./src/Utils')
        }
    },
}