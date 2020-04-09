# How to Create an Http Request in V.A.R

> If the application can't make an HTTP request, it's a piece of crap.

⚠️For demo purposes, all examples use HTTP client inside the components. In the real world, we'll wrap the usages of API into services or helpers to decouple between the business layer and the data access layer so that you can replace the implementation of any layer even if you know you will never have a chance to replace the implementation anyway.

## Example Code of API

For demo purposes, an in-memory express API is enough.

⚠️This API is rough an unsafe.

- [src/app.js](../../examples/var-api/src/app.js)
- [src/services/skill.js](../../examples/var-api/src/services/skill.service.js)

![JSON statement](../../images/http-request/json.jpg "JSON statement")
