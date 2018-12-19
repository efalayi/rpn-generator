import { Router } from 'express'
import ContactRepository from '../repositories/contacts'

const router = new Router()

router.get('/api/v1/contacts/phone-numbers', async (req, res) => {
  const phoneNumbers = await ContactRepository.getPhoneNumbers()
  res.json({
    phoneNumbers
  })
})

router.get('/api/v1/contacts/generate', async (req, res) => {
  const newPhoneNumbers = await ContactRepository.generateNewPhoneNumbers()
  res.json({
    newPhoneNumbers
  })
})

export default router
