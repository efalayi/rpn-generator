import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { JSDOM } from 'jsdom'

Enzyme.configure({ adapter: new Adapter() })

const documentHTML = '<!doctype html><html><body><div id="app"></div></body></html>'
const { window } = new JSDOM(documentHTML)
global.window = window
global.document = window.document
global.navigator = window.navigator

// const localStorageMock = (() => {
//   let store = {}
//   return {
//     getItem: key => store[key] || null,
//     setItem: (key, value) => {
//       store[key] = value.toString()
//     },
//     clear: () => {
//       store = {}
//     }
//   }
// })()

// Object.defineProperty(window, 'localStorage', {
//   value: localStorageMock
// })
