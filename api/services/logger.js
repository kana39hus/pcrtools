function logger(content) {
    console.log(new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString() + ": " + content)
}

module.exports = {
    logger
};