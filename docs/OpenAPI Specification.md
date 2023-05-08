---
sidebar_position: 3
---

# OpenAPI Specification

The OpenAPI Specification for the **icanhazdadjoke API Search Endpoint** is:

```
openapi: 3.0.0
info:
  title: icanhazdadjoke API
  description: API for getting dad jokes
  version: 1.0.0
servers:
  - url: https://icanhazdadjoke.com
paths:
  /search:
    get:
      summary: Search for dad jokes
      description: Returns a list of dad jokes matching the search term
      parameters:
        - name: term
          in: query
          description: The search term to use
          required: true
          schema:
            type: string
      responses:
        '200':
          description: A list of dad jokes matching the search term
          content:
            application/json:
              schema:
                type: object
                properties:
                  results:
                    type: array
                    items:
                      type: object
                      properties:
                        id:
                          type: string
                          description: The unique ID of the joke
                        joke:
                          type: string
                          description: The text of the joke
                        status:
                          type: integer
                          description: The HTTP status code of the response
        '400':
          description: Invalid search term provided
        '401':
          description: Authorization required
        '429':
          description: Too many requests
```

This specification defines the `/search` endpoint for the icanhazdadjoke API, which allows users to search for dad jokes using a search term. The endpoint takes a `term` parameter as a query parameter and returns a JSON response containing an array of joke objects. The response includes the ID of each joke, the text of the joke, and the HTTP status code of the response. The specification also includes error responses for invalid search terms, unauthorized requests, and too many requests.