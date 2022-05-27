# Docker Commands

1. Build `frontend` image

`docker build -f Dockerfiles/Dockerfile.frontend -t nish1896/fs-docker .`

2. Run Image

`docker run -p 3000:3000 nish1896/fs-docker`

3. Run Image with [Volume Mount](https://docs.docker.com/get-started/06_bind_mounts/)

`docker run -p 4000:3000 -v "$(pwd):/app" nish1896/fs-docker`
