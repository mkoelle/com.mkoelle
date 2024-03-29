#!/usr/bin/env bash
set +x #xtrace
set +v #verbose
set -e #errexit
set -u #nounset

region='us-east-1'
export AWS_DEFAULT_REGION=$region
export AWS_REGION=$region
export DOMAIN=mkoelle

# export AWS_SECRET_ACCESS_KEY= 
# export AWS_ACCESS_KEY_ID=  

set -x

BUCKET=$(aws cloudformation list-exports --query "Exports[?Name == 'com-${DOMAIN}-content-bucket'].Value" --output text)

npm i
npm run build

aws s3 sync _site "s3://${BUCKET}" \
  --exclude '**/index.html' \
  --exclude 'index.html' \
  --delete

aws s3 cp _site "s3://${BUCKET}" \
  --recursive \
  --exclude "*" \
  --include "**/index.html" \
  --include "index.html" \
  --cache-control 'max-age=0'
