# tempatNgopi

API requests for getting information about ngopi places. 
(Image processing -> reduce brightess )

## Getting Started

Clone this repository to your localhost server.

### Prerequisites

Make sure this things already installed in your local server.

* [npm](https://www.npmjs.com/) - Npm and Node
* [mongo](https://www.mongodb.com/) - Database Management


### Running Server

```powershell
$cd ..path/tempatNgopi
```

```powershell
$nodemon index.js
```

## API REQUESTS

  ### GET
  http://domain.com/api/getPlace
  
  Response
  ```powershell
          {
          "status": "success",
          "data": [
              {
                  "_id": "5dafb9ba25564b2635d55547",
                  "name": "Kopi Sawah",
                  "location": "Pokok nya lurus dari suhat ke patung pesawat, deket nya sm futsal",
                  "description": "bagus semua nya murah enak deh buat nongkrong",
                  "image": "logo.png",
                  "rating": "4",
                  "__v": 0
              },
              {
                  "_id": "5db831c63f061436a9ec1a01",
                  "name": "KLY ID",
                  "location": "di araya block c ",
                  "image": "logo.png",
                  "description": "tempatnya nyaman enak",
                  "rating": "5",
                  "__v": 0
              }
          ]
      }
  ```
  
  ### POST
  http://domain.com/api/addPlace
  Parameter : {
      name : String,
      location : String,
      image : multipart/form-data,
      description : String,
      rating : String
  }
  
  ```powershell
   {
    "status": "success",
    "data": ""
   }
```


## TUTORIAL MEMBUAT API (NODE JS)

-> [YOUTUBE](https://www.youtube.com/watch?v=ZO2WyEbRbzY&fbclid=IwAR3GSe3C4FkrmvkwJCG_3XaUQVWIU7R3_eGsOdzFvCmX6pRh3u7pZBFwDm0) - Cara membuat API dengan node js


