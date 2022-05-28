# Docker Commands

1. Build `frontend` image

`docker build -f Dockerfiles/Dockerfile.frontend -t nish1896/fs-docker .`

2. Run Image

`docker run -p 3000:3000 nish1896/fs-docker`

3. Run Image with [Volume Mount](https://docs.docker.com/get-started/06_bind_mounts/)

`docker run -p 3000:3000 -v /app/node_modules -v "$(pwd):/app" nish1896/fs-docker`

If using the `-v /app/node_modules` flag, you don't need to install `node_modules` folder. It means that not to take reference for `node_modules` in the actual directory

4. Build & Run Prod Image

`docker build -f Dockerfiles/Dockerfile.feBuild -t nish1896/fs-docker-fe .`

`docker run -p 3000:80 nish1896/fs-docker-fe`
