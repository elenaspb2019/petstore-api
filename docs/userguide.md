---
sidebar_position: 2
---

# Paws & Tails API tutorial

In this tutorial, you will learn how to add a new pet to a database, update and delete information about a pet, and get information about all pets.

1. One of the most common actions is adding pets to a database. Let's add some information about a cat named `Fluffy`. The system uses unique numeric identifiers to distinguish pets, while `available` status means that a pet is ready for adoption. To add a new pet, send the following HTTP POST request:
    ```bash
    curl -X 'POST' \
      'https://petstore3.swagger.io/api/v3/pet' \
      -H 'accept: application/json' \
      -H 'api_key: special-key' \
      -H 'Content-Type: application/json' \
      -d '{
      "id": 1,
      "category": {
        "id": 1,
        "name": "string"
      },
      "name": "Fluffy",
      "photoUrls": [
        "string"
      ],
      "tags": [
        {
          "id": 1,
          "name": "string"
        }
      ],
      "status": "available"
    }'
    ```

2.  Now send another request to get all the information about a pet. Find our cat by specifying the id `1` in the following request:

   ```bash
   curl -X 'GET' \
     'https://petstore3.swagger.io/api/v3/pet/1' \
     -H 'accept: application/json' \
     -H 'api_key: special-key'
   ```

3. When the pet has found a new family, update information about the pet by sending a request with the `sold` status:

   ```bash
   curl -X 'POST' \
     'https://petstore3.swagger.io/api/v3/pet/1?status=sold' \
     -H 'accept: application/json' \
     -H 'api_key: special-key' \
     -d ''
   ```

4. When the pet has been delivered, delete information about the pet from the store's database:

   ```bash
   curl -X 'DELETE' \
     'https://petstore3.swagger.io/api/v3/pet/1' \
     -H 'accept: application/json' \
     -H 'api_key: special-key'
   ```

5. To find all available pets, send the following request with the `available` status:

   ```bash
   curl -X 'GET' \
     'https://petstore3.swagger.io/api/v3/pet/findByStatus?status=available' \
     -H 'accept: application/json' \
     -H 'api_key: special-key'
   ```

## Integration


An API request can be sent using various programming languages.

The example below shows how a request can be sent and processed in a simple Python application.

This application requests information about all available pets and prints the ids and names of the first ten to the console.

   ```python
   import requests
   
   
   def print_pets():
       URL = "https://petstore3.swagger.io/api/v3/pet/findByStatus"
   
       status = "available"
   
       PARAMS = {'status': status}
   
       response = requests.get(url=URL, params=PARAMS)
   
       pets = response.json()
   
       counter = 1
   
       for pet in pets:
           if counter > 10:
               break
           print("{} {}".format(pet['id'], pet['name']))
           counter = counter + 1
   
   
   if __name__ == '__main__':
       print_pets()
   ```
   
   You will get the following output:
      
   ```text
   7 Lion 1
   8 Lion 2
   7709 Laika
   231 doggie
   321 goriynich
   1234554321 Kamysh
   402402 Bob
   522222543438 Kvok
   178787878 Kvok
   0 hhh999
   ```
