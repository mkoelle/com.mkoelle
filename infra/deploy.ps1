$region='us-east-1'
$env:AWS_DEFAULT_REGION=$region
$env:AWS_REGION=$region

# $env:AWS_SECRET_ACCESS_KEY=""
# $env:AWS_ACCESS_KEY_ID="" 

aws cloudformation deploy `
  --region ${region} `
  --template-file cfn/infra.yml `
  --stack-name demo-site `
  --tags `
      mkoelle:team=mkoelle `
      mkoelle:product=demo-site.com `
      mkoelle:stage=dev
      mkoelle:createdBy=${[System.Security.Principal.WindowsIdentity]::GetCurrent().Name}
