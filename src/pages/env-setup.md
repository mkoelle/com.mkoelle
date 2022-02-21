# Setting up your dev environment

## Install

- [GIT](https://git-scm.com/downloads)
- [NVM](https://github.com/nvm-sh/nvm)
- [Node](https://nodejs.org/en/) via NVM
- [VS-Code](https://code.visualstudio.com/)
- [AWS CLI](https://aws.amazon.com/cli/)
- [AWS SSO creds helper](https://www.npmjs.com/package/aws-sso-creds-helper)
- [AWS CDK](https://docs.aws.amazon.com/cdk/v2/guide/getting_started.html)

## Configure

Depending on your system, configure your shell profile with the functions below:

```shell
# .zshrc

#---------
# Signs into an aws profile and sets the credentials for the SDK
# Arguments:
#   profile -> default "dev"
#---------
function aws-sso-login {
  profile="${1:-dev}" # assign profile to the first argument to the function, The value `dev` after `:-` is the default
  unset AWS_ACCESS_KEY_ID
  unset AWS_SECRET_ACCESS_KEY
  export AWS_PROFILE=${profile}
  aws sso login
  ssocreds -p "${AWS_PROFILE}"
  echo "Connected to $(aws iam list-account-aliases --output text --query 'AccountAliases')"
}
```

```powershell
# $PROFILE.CurrentUserAllHosts
 
#---------
# Signs into an aws profile and sets the credentials for the SDK
# Arguments:
#   profile -> default "dev"
#---------
function aws-sso-login {
    param(
        [String] $Profile = "dev"
    )
    $env:AWS_PROFILE = $Profile
    if ($env:AWS_ACCESS_KEY_ID) { remove-item $env:AWS_ACCESS_KEY_ID }
    if ($env:AWS_SECRET_ACCESS_KEY) { remove-item $env:AWS_SECRET_ACCESS_KEY }
    aws sso login
    ssocreds -p "$Profile"
}
```
