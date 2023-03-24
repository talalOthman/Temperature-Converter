import { reactive } from 'vue'

export const store = reactive({
  result: 0,
  sign: 'C',

  actualType: 'Celsius',
  convertToType: 'Fahrenheit',
  convert() {
    switch (this.actualType) {
      case 'Celsius':
        switch (this.convertToType) {
          case 'Fahrenheit':
            this.celsiusToFahrenheit()
            break
        }
        break
      case 'Fahrenheit':
        switch (this.convertToType) {
          case 'Celsius':
            this.fahrenheitToCelsius()
            break
        }
        break
      default:
        break
    }
  },
  celsiusToFahrenheit() {
    this.result = Number((this.degree * 9) / 5 + 32).toFixed(2)
    this.sign = 'F'
  },
  fahrenheitToCelsius() {
    this.result = Number(((this.degree - 32) * 5) / 9).toFixed(2)
    this.sign = 'C'
  },

  degree: null
})
