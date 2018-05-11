const RangeSlider = require('../')
const rangeslider = new RangeSlider()

const choo = require('choo')
const html = require('choo/html')
const css = require('sheetify')

css('../styles.css')

const app = choo()

app.route('/', (state, emit) => {
  return html`
    <body>
      ${rangeslider.render({
        min: 0,
        max: 100,
        value: 50,
        step: 0.001
      })}
    </body>
  `
})
app.route('*', (state, emit) => {
  return html`
    <body>
      404
    </body>
  `
})

module.exports = app.mount('body')
