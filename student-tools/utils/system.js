const os = require('os');

function systemInfo() {
    return {
        osType: os.type(),
        platform: os.platform(),
        architecture: os.arch(),
        cpuCount: os.cpus().length,
        nodeVersion: process.version,
        currentDirectory: process.cwd()
    };
}

module.exports = { systemInfo };
