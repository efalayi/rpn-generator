import saveToFile from '../helpers/saveToFile'
import factoryTypes from './types'

class Factory {
  constructor(props) {
    this.name = props.name || 'Factory'
    this.type = props.type || 'name'
  }

  getFactoryName = () => this.name

  build = (...args) => {
    const { type } = this
    if (!type || !factoryTypes[type]) {
      throw new TypeError('Factory type does not exist')
    }
    return factoryTypes[type](args)
  }

  buildList = async (maximum, filePath, shouldSaveToFile) => {
    const list = []
    for (let index = 0; index < maximum; index += 1) {
      list.push(this.build(maximum))
    }
    if (shouldSaveToFile) {
      await saveToFile(filePath, 'phoneNumbers', list)
    }
    return list
  }
}

export default Factory
