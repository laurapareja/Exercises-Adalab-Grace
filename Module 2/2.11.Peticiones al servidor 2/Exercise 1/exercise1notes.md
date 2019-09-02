## Exercise 1

[https://swapi.co/]

- **la URL base del API**
  [https://swapi.co/api/]

* **si necesita autenticación**
  Swapi is a completely open API. No authentication is required to query and get data. This also means that we've limited what you can do to just GET-ing the data. If you find a mistake in the data, then tweet the author or email him.

- **método HTTP que deben usar las peticiones a este API**
  This page is secure (valid HTTPS).
  Certificate - valid and trusted
  The connection to this site is using a valid, trusted server certificate issued by COMODO ECC Domain Validation Secure Server CA 2.

* **URL para acceder a la info del personaje "Luke Skywalker"**

[https://swapi.co/api/people/3/]

- **URL para acceder a la info de la película "A New Hope"**
  [https://swapi.co/api/films/1/]

* **¿a qué otros recursos puedo acceder desde el API además de personajes y pelis**

[https://swapi.co/api/]

    "people": "https://swapi.co/api/people/",
    "planets": "https://swapi.co/api/planets/",
    "films": "https://swapi.co/api/films/",
    "species": "https://swapi.co/api/species/",
    "vehicles": "https://swapi.co/api/vehicles/",
    "starships": "https://swapi.co/api/starships/"

- **URL para acceder al listado de personajes, ¿está paginada?**

no tiene la propiedad page definida en la documentación

- **¿cómo puedo buscar personajes mediante la URL?**
  [https://swapi.co/api/people/?search=r2]

- **¿cómo puedo hacer que el JSON de una petición se me devuelva traducido a Wookiee?**
