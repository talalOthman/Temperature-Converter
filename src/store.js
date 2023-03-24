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
          case 'Kelvin':
            this.celsiusToKelvin()
            break
          default:
            break
        }
        break
      case 'Fahrenheit':
        switch (this.convertToType) {
          case 'Celsius':
            this.fahrenheitToCelsius()
            break
          case 'Kelvin':
            this.fahrenheitToKelvin()
            break
          default:
            break
        }
        break
      case 'Kelvin':
        switch (this.convertToType) {
          case 'Celsius':
            this.kelvinToCelsius()
            break
          case 'Fahrenheit':
            this.kelvinToFahrenheit()
            break
          default:
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
  celsiusToKelvin() {
    this.result = Number(this.degree + 273.15).toFixed(2)
    this.sign = 'K'
  },
  kelvinToCelsius() {
    this.result = Number(this.degree - 273.15).toFixed(2)
    this.sign = 'C'
  },
  fahrenheitToKelvin() {
    this.result = Number(((this.degree - 32) * 5) / 9 + 273.15).toFixed(2)
    this.sign = 'K'
  },
  kelvinToFahrenheit() {
    this.result = Number(((this.degree - 273.15) * 9) / 5 + 32).toFixed(2)
    this.sign = 'F'
  },

  degree: null
})
