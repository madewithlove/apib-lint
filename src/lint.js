import fs from 'fs';
import process from 'process';
import colors from 'colors';
import protagonist from 'protagonist';

export default function(file) {
    const source = fs.readFileSync(file).toString();

    protagonist.parse(source, {type: 'ast'}, function (error, result) {
        if (error) {
            console.error(error);
        }

        if (result.warnings.length) {
            result.warnings.forEach(warning => {
                console.log(`${colors.red('WARN:')} ${warning.message}`);
            });

            process.exit(1);
        }
    });
}