#!/bin/bash -x

SSH_KEY=${1:-/root/.ssh/id_rsa_deploy}

exec docker run \
    -v "${SSH_KEY}":/root/.ssh/id_rsa \
    -v $(pwd):/code \
    mhart/alpine-node \
    /bin/sh -c "\
        cd /code && \
        printf \"@economist:registry=https://registry.npmjs.org/\n//registry.npmjs.org/:_authToken=${NPM_TOKEN}\n\" > /root/.npmrc && \
        npm i --unsafe-perm && \
        SAUCE_ACCESS_KEY=${SAUCE_ACCESS_KEY} npm t && \
        { [[ \"$(git rev-parse --abbrev-ref HEAD)\" == \"master\" ]] && npm run pages; } \
    ";

