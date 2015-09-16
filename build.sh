#!/bin/bash

SSH_KEY=${1:-/root/.ssh/id_rsa}

[[ ${NPM_TOKEN:-} = '' ]] && { echo "NPM_TOKEN empty"; exit 1; }
[[ ${SAUCE_ACCESS_KEY:-} = '' ]] && { echo "SAUCE_ACCESS_KEY empty"; exit 2; }

exec docker run \
    -v "${SSH_KEY}":/root/.ssh/id_rsa \
    -v $(pwd):/code \
    node:4.0-slim \
    /bin/sh -c "\
        apt-get update && apt-get install -y git python2.7 && \
        printf \"@economist:registry=https://registry.npmjs.org/\n//registry.npmjs.org/:_authToken=${NPM_TOKEN}\n\" > /root/.npmrc && \
        cd /code && \
        npm i --unsafe-perm --verbose && \
        echo SAUCE_USER=sublimino SAUCE_ACCESS_KEY=${SAUCE_ACCESS_KEY} npm t && \
        { git config --global user.email 'ecprod@economist.com'; git config --global user.name 'GoCD'; true; } && \
        { [ \"$(git rev-parse --abbrev-ref HEAD)\" = \"master\" ] && npm run pages; } \
        echo 'Build finished' \
    ";

