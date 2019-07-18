# Spartan Initiative

This project consists of a web api for people to register an account and then configuring their ultimate spartan loadout. A web frontend and mobile app can be developed against this API. Admins still need some CMS to enter data for spartan weaponry.

## Mongo Setup

You can either use the docker file in the project or use your own system installation. Both methods still require a `.env` file with these environment variables provided.

```bash
PORT=3000
MONGO_USER=your_username
MONGO_PWD=your_password
MONGO_URL=mongodb://localhost:27017/your_db_name
```

Note the port here is for the server and not the mongo port.

### Docker

A docker compose yml config file is already provided in the project. Once you have the .env in the root folder run the following to start mongo:

```bash
docker-compose up
```

### System Mongo

If you prefer to use your system installed mongo or you only have Windows 10 Home that doesn't support Docker because Microsoft decided not to include _hyper-v_ for normal users, specify your existing username and password along with the url to mongo in the `.env` will suffice.

> **Note** If you are attempting to run docker on Windows 10, please make sure your edition is either _Pro_ or _Enterprise_ because docker needs hyper-v to execute which isn't included in the Home edition. Linux and Mac are fine.
