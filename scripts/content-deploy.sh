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

npm run build

BRANCH=$(git branch --show-current)

# TODO host feature branch code in sub folder, or similar seperated location.
# if [[ $BRANCH =~ "feature" ]]; then
#   FEATURE="/$(echo $BRANCH | cut -d'/' -f2)"
#   echo $FEATURE
# fi

BUCKET=$(aws cloudformation list-exports --query "Exports[?Name == 'com-${DOMAIN}-content-bucket'].Value" --output text)
aws s3 sync dist "s3://${BUCKET}${FEATURE}" --exclude index.html --delete
aws s3 cp dist "s3://${BUCKET}${FEATURE}" --recursive --exclude "*" --include "index.html" --cache-control 'max-age=0' 
