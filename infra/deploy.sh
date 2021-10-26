#!/usr/bin/env bash
set +x #xtrace
set +v #verbose
set -e #errexit
set -u #nounset

region='us-east-1'
export AWS_DEFAULT_REGION=$region
export AWS_REGION=$region

# export AWS_SECRET_ACCESS_KEY= 
# export AWS_ACCESS_KEY_ID=  

set -x

aws cloudformation deploy \
  --region ${region} \
  --template-file cfn/infra.yml \
  --stack-name demo-site \
  --tags \
      mkoelle:team=mkoelle \
      mkoelle:product=demo-site.com \
      mkoelle:stage=dev \
      mkoelle:createdBy=${USER}
