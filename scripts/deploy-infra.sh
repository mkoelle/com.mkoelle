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

aws cloudformation deploy \
  --region ${region} \
  --template-file infra/cfn/infra.yml \
  --stack-name com-${DOMAIN} \
  --tags \
      Owner=mkoelle \
      Project=com.${DOMAIN} \
      Code=com.mkoelle
