import colors from 'colors';

export default function formatWarning(source, warning) {
    const {message, location} = warning;
    const presenter = '\n>> ';

    // Get code snippet
    const {index, length} = location[0];
    let code = source.slice(index, index + length).trim();
    code = presenter + code.replace(/\n/g, presenter);

    return `${colors.red('WARN:')} ${message}${colors.grey(code)}\n`;
}