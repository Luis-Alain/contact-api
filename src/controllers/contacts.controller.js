import { pool } from "../db.js";

export const getContacts = async (req, res) => {
  try {
    const [rows, fields] = await pool.query("SELECT * FROM contacts;");
    res.json(rows);
  } catch (error) {
    res.status(500).send("Error retrieving contacts from the database");
  }
};

export const getContactById = async (req, res) => {
  try {
    const [rows] = await pool.query(
      "SELECT * FROM contacts WHERE contact_id = ?;",
      [req.params.id]
    );
    if (rows.length > 0) {
      res.send(rows[0]);
    } else {
      res.status(404).send("Contact not found");
    }
  } catch (error) {
    res.status(500).send("Error retrieving contact from the database");
  }
};

export const createContact = async (req, res) => {
  const { name, second_name, phone_number, email, address } = req.body;
  try {
    const [rows, fields] = await pool.query(
      "INSERT INTO contacts (name, second_name, phone_number, email, address) VALUES (?, ?, ?, ?, ?);",
      [name, second_name, phone_number, email, address]
    );
    res.send({
      id: rows.insertId,
      name,
      second_name,
      phone_number,
      email,
      address,
    });
  } catch (error) {
    res.status(500).send("Error creating the contact");
  }
};

export const deleteContactById = async (req, res) => {
  try {
    const [rows] = await pool.query(
      "DELETE FROM contacts WHERE contact_id = ?;",
      [req.params.id]
    );
    if (rows.affectedRows > 0) {
      res.send("Contact deleted successfully");
    } else {
      res.status(404).send("Contact not found");
    }
  } catch (error) {
    res.status(500).send("Error deleting contact from the database");
  }
};

export const updateContact = async (req, res) => {
  const possibleFields = [
    "name",
    "second_name",
    "phone_number",
    "email",
    "address",
  ];
  const updateFields = [];
  const updateValues = [];

  possibleFields.forEach((field) => {
    if (req.body[field] !== undefined) {
      updateFields.push(`${field} = ?`);
      updateValues.push(req.body[field]);
    }
  });

  if (updateFields.length > 0) {
    const updateQuery = `UPDATE contacts SET ${updateFields.join(
      ", "
    )} WHERE contact_id = ?`;
    updateValues.push(req.params.id);

    const [rows] = await pool.query(updateQuery, updateValues);
    res.send(rows);
  } else {
    res.status(400).send("No fields to update provided");
  }
};
