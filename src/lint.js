import fs from 'fs';
import colors from 'colors';
import protagonist from 'protagonist';

export default function (file) {
    fs.readFile(file, (errors, source) => {
        source = source.toString();

        protagonist.parse(source, {type: 'ast'}, (error, result) => {
            if (error) {
                console.error(error);
            }

            if (result.warnings.length) {
                result.warnings.forEach(warning => {
                    const {message, location} = warning;
                    const presenter = '\n>> ';

                    // Get code snippet
                    const {index, length} = location[0];
                    let code = source.slice(index, index + length).trim();
                    code = presenter + code.replace(/\n/g, presenter);

                    console.log(`${colors.red('WARN:')} ${message}${colors.grey(code)}\n`);
                });

                throw new Error(`${result.warnings.length} warnings found in APIB file`);
            }
        });
    });
}
