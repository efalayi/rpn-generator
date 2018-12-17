import { Router } from 'express'
import ContactRepository from '../repositories/contacts'

const router = new Router()

router.get('/api/v1/contacts/phone-numbers', async (req, res) => {
  const phoneNumbers = await ContactRepository.getPhoneNumbers()
  res.json({
    phoneNumbers
  })
})

export default router
