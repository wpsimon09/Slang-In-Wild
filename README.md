<p align="center">
  <img src="https://github.com/user-attachments/assets/089a51f2-5cb0-4605-84a4-69b4698ec0a1" />
</p>
Slang™ and the Slang logo are trademarks of the Khronos Group Inc.

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
Note that the port used is differnt so you have to change the port when connecting to the database to `11433`

```bash
sudo system ctl start docker
sudo docker compose up
```

Copy and run `init.sql` in your favourite database manager to create database and test entires. 

### 4. Run application

```
npm run dev 
```


