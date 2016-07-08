import fs from 'fs';
import protagonist from 'protagonist';
import formatWarning from './formatWarning';

export default function (file) {
    fs.readFile(file, (errors, source) => {
        source = source.toString();

        protagonist.parse(source, {type: 'ast'}, (error, result) => {
            if (error) {
                console.error(error);
            }

            if (result.warnings.length) {
                result.warnings.forEach(warning => {
                    console.log(formatWarning(source, warning));
                });

                throw new Error(`${result.warnings.length} warnings found in APIB file`);
            }
        });
    });
}
