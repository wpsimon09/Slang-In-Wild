# Slang in wild
[link](https://www.slang-in-wild.com/)

Browse open soruce repositories that are using Slang shading language and compiler. 

## Build
### NOTE: docker is required to run database localy 

### 1. clone and install dependencies

```bash
git clone https://github.com/wpsimon09/Slang-In-Wild.git
cd Slang-In-Wild
npm install
```

### 2. copy env
```bash
cp env.exampl .env
```
**Note:** Emails will not work during developemnt, by default the env is configured to work with the database provided in `docker-compose` file

### 3. Run database
```bash
sudo system ctl start docker
sudo docker compose up
```


