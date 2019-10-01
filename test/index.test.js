const child_process = require('child_process')
const path = require('path')
const assert = require('assert')

describe('babelts', () => {
    it('should run normally', () => {
        const output = child_process.execSync(
            'node --require ./index.js ./test/addScript.ts',
            {
                cwd: path.join(__dirname, '..'),
                encoding: 'utf8',
                stdio: ['pipe', 'pipe', 'pipe', 'pipe'],
            },
        )
        assert.strictEqual(output, `4\n`)
    })

    it('should handle errors', () => {
        let didThrow = false
        try {
            const output = child_process.execSync(
                'node --require ./index.js ./test/addScriptError.ts',
                {
                    cwd: path.join(__dirname, '..'),
                    encoding: 'utf8',
                    stdio: ['pipe', 'pipe', 'pipe', 'pipe'],
                },
            )
        } catch (e) {
            didThrow = true
            assert(
                e.message.includes('Horrible add error.'),
                'Should contain the error message.',
            )
        }
        assert(didThrow, 'Should throw.')
    })

    it('should handle async errors', () => {
        let didThrow = false
        try {
            const output = child_process.execSync(
                'node --require ./index.js ./test/addScriptErrorAsync.ts',
                {
                    cwd: path.join(__dirname, '..'),
                    encoding: 'utf8',
                    stdio: ['pipe', 'pipe', 'pipe', 'pipe'],
                },
            )
        } catch (e) {
            didThrow = true
            assert(
                e.message.includes('Horrible add error.'),
                'Should contain the error message.',
            )
        }
        assert(didThrow, 'Should throw.')
    })
})
