require('hard-rejection/register')

require('@babel/register')({
    extensions: ['.es6', '.es', '.jsx', '.js', '.mjs', '.ts', '.tsx'],
    presets: [
        '@babel/preset-typescript',
        [
            '@babel/preset-env',
            {
                ignoreBrowserslistConfig: true,
                loose: true,
                targets: {
                    node: 'current',
                },
            },
        ],
    ],
})
