const react17 = require('react17');
const react18 = require('react18');

if (window.USE_18) {
    module.exports = react18;
} else {
    module.exports = react17;
}
