import { Router } from 'express'
import ContactRepository from '../repositories/contacts'

const router = new Router()

router.get('/api/v1/contacts/phone-numbers', async (req, res) => {
  const phoneNumbers = await ContactRepository.getPhoneNumbers()
  res.status(200).send({
    phoneNumbers
  })
})

router.post('/api/v1/contacts/generate', async (req, res) => {
  const newPhoneNumbers = await ContactRepository.generateNewPhoneNumbers()
  res.res.status(200).send({
    newPhoneNumbers
  })
})

export default router
