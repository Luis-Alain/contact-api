# REST API de Contactos con Express.js

## Introducción

Esta REST API proporciona operaciones básicas para gestionar una lista de contactos utilizando Express.js y MySQL.

## Base URL

El punto de acceso principal para esta API es `/api/contacts`.

## Endpoints

### Obtener todos los contactos
```http
GET /api/contacts
```

**Descripción:** Este endpoint devuelve una lista de todos los contactos almacenados en la base de datos.

**Respuesta exitosa:**
```text
Código de estado: 200 OK

Cuerpo de la respuesta: Lista de objetos de contacto.
```

**Respuesta de error:**
```markdown
Código de estado: 500 Internal Server Error

Cuerpo de la respuesta: "Error retrieving contacts from the database"
```

## Obtener un contacto por ID
```http
GET /api/contacts/:id
```

**Descripción:** Este endpoint devuelve la información de un contacto específico según su ID.

**Parámetros de la URL:**
- `id`: Identificador único del contacto.

**Respuesta exitosa:**
```markdown
Código de estado: 200 OK

Cuerpo de la respuesta: Objeto de contacto.
```

**Respuesta de error:**
```markdown
Código de estado: 404 Not Found

Cuerpo de la respuesta: "Contact not found"

Código de estado: 500 Internal Server Error

Cuerpo de la respuesta: "Error retrieving contact from the database"
```

## Crear un nuevo contacto
```http
POST /api/contacts
```

**Descripción:** Este endpoint crea un nuevo contacto utilizando la información proporcionada en el cuerpo de la solicitud.

**Parámetros del cuerpo de la solicitud:**
- `name`: Nombre del contacto.
- `second_name`: Segundo nombre del contacto.
- `phone_number`: Número de teléfono del contacto.
- `email`: Correo electrónico del contacto.
- `address`: Dirección del contacto.

**Respuesta exitosa:**
```markdown
Código de estado: 200 OK

Cuerpo de la respuesta: Objeto del nuevo contacto creado.
```

**Respuesta de error:**
```markdown
Código de estado: 500 Internal Server Error

Cuerpo de la respuesta: "Error creating the contact"
```

## Eliminar un contacto por ID

```http
DELETE /api/contacts/:id
```

**Descripción:** Este endpoint elimina un contacto específico según su ID.

**Parámetros de la URL:**
- `id`: Identificador único del contacto.

**Respuesta exitosa:**
```markdown
Código de estado: 200 OK

Cuerpo de la respuesta: "Contact deleted successfully"
```

**Respuesta de error:**
```markdown
Código de estado: 404 Not Found

Cuerpo de la respuesta: "Contact not found"

Código de estado: 500 Internal Server Error

Cuerpo de la respuesta: "Error deleting contact from the database"
```

## Actualizar un contacto por ID

```http
PATCH /api/contacts/:id
```

**Descripción:** Este endpoint actualiza la información de un contacto específico según su ID. Solo los campos proporcionados en el cuerpo de la solicitud se actualizarán.

**Parámetros de la URL:**
- `id`: Identificador único del contacto.


**Parámetros del cuerpo de la solicitud:**
- `name`: Nuevo nombre del contacto (opcional).
- `second_name`: Nuevo segundo nombre del contacto (opcional).
- `phone_number`: Nuevo número de teléfono del contacto (opcional).
- `email`: Nuevo correo electrónico del contacto (opcional).
- `address`: Nueva dirección del contacto (opcional).

**Respuesta exitosa:**
```markdown
Código de estado: 200 OK

Cuerpo de la respuesta: Objeto actualizado del contacto.
```

**Respuesta de error:**
```markdown
Código de estado: 400 Bad Request

Cuerpo de la respuesta: "No fields to update provided"

Código de estado: 500 Internal Server Error

Cuerpo de la respuesta: "Error updating contact in the database"
```

## Configuración de la Base de Datos

Asegúrate de configurar la conexión a la base de datos en el archivo `config.js`. Utiliza las siguientes variables de entorno:

```js
- `DB_HOST`: Dirección del host de la base de datos.
- `DB_USER`: Usuario de la base de datos.
- `DB_PASSWORD`: Contraseña de la base de datos.
- `DB_PORT`: Puerto de la base de datos.
- `DB_DATABASE`: Nombre de la base de datos.
```
