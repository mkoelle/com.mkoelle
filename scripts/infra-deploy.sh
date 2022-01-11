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

HOSTEDZONE_ID=$(aws ssm get-parameter --name com-${DOMAIN}-domains-hosted-zone-id --query "Parameter.Value" --output text)
GIVEN_DOMAIN=$(aws ssm get-parameter --name com-${DOMAIN}-domains-hosted-zone-name --query "Parameter.Value" --output text)

aws cloudformation deploy \
  --region ${region} \
  --template-file infra/cfn/infra.yml \
  --stack-name com-${DOMAIN} \
  --parameter-overrides \
      GivenDomain=${GIVEN_DOMAIN%?} \
      HostedZoneId=${HOSTEDZONE_ID} \
  --tags \
      Owner=mkoelle \
      Project=com.${DOMAIN} \
      Code=com.mkoelle
