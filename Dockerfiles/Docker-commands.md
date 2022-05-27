# Docker Commands

1. Build `frontend` image

`docker build -f Dockerfiles/Dockerfile.frontend -t nish1896/fs-docker .`

2. Run Image

`docker run -p 3000:3000 nish1896/fs-docker`
