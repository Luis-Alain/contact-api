import {Router} from 'express';
import { getContacts } from "../controllers/contacts.controller.js";
import { createContact } from "../controllers/contacts.controller.js";
import { getContactById } from "../controllers/contacts.controller.js"; 
import {deleteContactById} from "../controllers/contacts.controller.js";
import { updateContact } from '../controllers/contacts.controller.js';

const router = Router();

router.get("/contacts", getContacts);
router.post("/contacts/post", createContact);
router.get("/contacts/:id", getContactById);
router.delete("/contacts/:id", deleteContactById);
router.patch("/contacts/:id", updateContact);

export default router;