#### Created By _**Colton Thatcher**_

<br>
<p align="center">
  <u><big><b>LocalLookUp API</b></big></u>
</p>

   
</p>

<p align="center">
  <small>Initiated Jan 20th, 2022.</small>
</p>



##  About the Project

### Description
An Api in which a user can see a Restaurant or Shop posted in a local town look up.

### Known Bugs

* The Api uses seeded endpoints from this repository, so it is not pulling from a Outsourced Api.
* There is a limited number of GET search requests, currently you can only search for JSON data with the string Restaurant, string Shop, and Int TownId.

### Built With
* Visual Studio Code
* C#
* ASP.NET Core MVC
* MySQL 
* Entity Framework 
* Swagger
* Postman


------------------------------

## How To?



### Install .NET Core
* Using a mac
  * [Click here](https://dotnet.microsoft.com/download/thank-you/dotnet-sdk-2.2.106-macos-x64-installer) to download the .NET Core. (note 64bit version)
* Using Windows
  * [Click here](https://dotnet.microsoft.com/download/thank-you/dotnet-sdk-2.2.203-windows-x64-installer) to download .NET Core. (note 64bit version) 

### Install dotnet
 Put the following text in command line `dotnet tool install -g dotnet-script`

#### Install MySQL
 [Download and install which ever version is recent of MySQL Workbench](https://dev.mysql.com/downloads/workbench/).

#### Install Postman
Needed to test Api calls [Download and install Postman](https://www.postman.com/downloads/).


### Setup

  #### Cloning

  1) Navigate to the [LocalLookUp.Solution](https://github.com/Coltthatcher/LocalLookUp.Solution).
  2) Click Clone in the upper right corner.
  3) Open up your system Terminal or GitBash.
  4) Clone the repository to your desktop: `$ git clone https://github.com/Coltthatcher/LocalLookUp.Solution.git`
  5) Run the command `cd LocalLookUp.Solution` to get into the project directory.

  #### AppSettings

  1) Create a new file in the LocalLookUp.Solution/LocalLookUp directory named `appsettings.json`
  2) Add in the following code to the appsettings.json file:

  ```
{
    "Logging": {
        "LogLevel": {
        "Default": "Warning"
        }
    },
    "AllowedHosts": "*",
    "ConnectionStrings": {
        "DefaultConnection": "Server=localhost;Port=3306;database=locallookup_api;uid=root;pwd=YourPassword;"
    }
}
  ```
  3) Note YourPassword should be your personal sql password.

  #### Database
  1) Navigate to LocalLookUp.Solution/LocalLookUp directory `LocalLookUp.Solution/LocalLookUp`).
  2) Run the command `dotnet ef database update`.

  #### Launch the API
  1) Navigate to `LocalLookUp.Solution/LocalLookUp`
  2) Run the command `dotnet run` To gain access to the browser and API

------------------------------


### Using Swagger
`dotnet run` select `http://localhost:5000/swagger`



### Endpoints
`https://localhost:5000`

#### HTTP Request Structure
```
GET /api/towns
POST /api/towns
GET /api/towns
PUT /api/towns
DELETE /api/towns
```

### Searching for an API
1) When the site is up and running with `dotnet run` have the postman application open on your machine.
2) if you wish to search for a specific restaurant enter `http://localhost:5000/api/towns?restaurant=bistro` this will return the JSON Data for that town the restaurant belongs to. Its will work vice versa with shop using the same logic.


### Acknowledgments

#### [Epicodus](https://www.epicodus.com/)


## License

_[MIT](https://opensource.org/licenses/MIT)_
Copyright (c) _2021_ _Colt Thatcher_

## Support and Contact Details
* _[colt.thatcher303@gmail.com](colt.thatcher303@gmail.com)_