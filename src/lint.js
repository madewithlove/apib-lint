import fs from 'fs';
import process from 'process';
import colors from 'colors';
import protagonist from 'protagonist';

export default function (file) {
    const source = fs.readFileSync(file).toString();

    protagonist.parse(source, {type: 'ast'}, function (error, result) {
        if (error) {
            console.error(error);
        }

        if (result.warnings.length) {
            result.warnings.forEach(warning => {
                const {message, location} = warning;
                const presenter = "\n>> ";

                // Get code snippet
                const {index, length} = location[0];
                let code = source.slice(index, index + length).trim();
                code = presenter + code.replace(/\n/g, presenter);

                console.log(`${colors.red('WARN:')} ${message}${colors.grey(code)}\n`);
            });

            process.exit(1);
        }
    });
}