/**
 * Created by Adrien on 29/03/2015.
 */

import Shell = require('./webshell/Shell');
import keyword = require('./webshell/Keyword');

export function run() {
    var shell = new Shell.Shell(keyword.handleUnknownKeyword);
    shell.input = 'toto';
    shell.handleInput();
}
