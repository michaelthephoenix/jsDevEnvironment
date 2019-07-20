/*
    this script genertes data for local time development.
    this way you don't have to point to an actual API,
    but you enjoy realistic, but randomised data,
    and rapid page loads due to local, static data.
*/

/* eslint-disabla no-console */

import jsf from 'json-schema-faker';
import {schema} from './mockDataSchema';
import fs from 'fs';
import chalk from 'chalk';

const json = JSON.stringify(jsf(schema));

fs.writeFile("./src/api/db.json", json, function(err) {
    if (err) {
        return console.log(chalk.red(err));
    }else{
        console.log(chalk.green("Mock data generated"));
    }
});