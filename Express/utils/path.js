const path = require('path');

// module.exports = process.mainModule.filename; // This is deprecated.
module.exports = path.dirname(require.main.filename);