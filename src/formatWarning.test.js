import assert from 'assert';
import formatWarning from './formatWarning';

describe('formatWarning', () => {
    it('can format warnings to a readable format', () => {
        const source = 'This is some code\nAnd it is marvelous';
        const result = formatWarning(source, {
            message: 'Nope',
            location: [{index: 0, length: 35}],
        });

        assert.equal(true, result.includes('Nope'));
        assert.equal(true, result.includes('>> This is some code'));
    });
});