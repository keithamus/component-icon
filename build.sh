#!/bin/bash

SSH_KEY=${1:-/root/.ssh/id_rsa}

[[ ${NPM_TOKEN:-} = '' ]] && { echo "NPM_TOKEN empty"; exit 1; }
[[ ${SAUCE_ACCESS_KEY:-} = '' ]] && { echo "SAUCE_ACCESS_KEY empty"; exit 2; }

exec docker run \
    -v "${SSH_KEY}":/root/.ssh/id_rsa \
    -v $(pwd):/code \
    sublimino/node4-base \
    /bin/sh -cx "\
        adduser --disabled-password --gecos '' machine && \
        cd /code && \
        su machine -c \"printf @economist:registry=https://registry.npmjs.org/\n//registry.npmjs.org/:_authToken=${NPM_TOKEN}\n > .npmrc\" && \
        cat /etc/passwd && \
        su machine -c 'npm i' && \
        echo SAUCE_USER=sublimino SAUCE_ACCESS_KEY=${SAUCE_ACCESS_KEY} npm t && \
        { git config --global user.email 'ecprod@economist.com'; git config --global user.name 'GoCD'; true; } && \
        { [ \"$(git rev-parse --abbrev-ref HEAD)\" = \"master\" ] && { su machine -c 'npm run pages'; } || true; } ; \
        RETURN_CODE=\$?; \
        echo \"Build finished with status \${RETURN_CODE}\"; \
        exit \${RETURN_CODE}
    ";

