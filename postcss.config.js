const autoprefixer = require('autoprefixer')
const purgecss = require('@fullhuman/postcss-purgecss')

const plugins = [
                  autoprefixer,
                  purgecss({
                    content: ['./dist/**/*.html'],
                    safelist: ['active', 'no-webp', 'webp']
                  })
                ]

module.exports = {
  plugins
}
