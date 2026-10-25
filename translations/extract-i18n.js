'use strict';

const path = require('path');
const { writeExports } = require('./extract-i18n-lib.js');

writeExports({
    html: path.join(__dirname, '..', 'prepper.html'),
    format: 'lang-blocks',
    dataVar: 'I18N_PREPPER_DATA',
});
