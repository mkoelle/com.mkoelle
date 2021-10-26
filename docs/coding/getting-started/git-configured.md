# Git customization

``` cfg
[user]
  name = Mark Koelle
[includeIf "gitdir:~/src/github.com/"]
  path = .personal.gitconfig
[includeIf "gitdir:~/src/company.com/"]
  path = .company.gitconfig
[core]
    editor = code --wait
[difftool "vscode"]
    cmd = code --wait --diff $LOCAL $REMOTE
[merge]
    tool = vscode

[fetch]
    prune = true
[pull]
    rebase = true
[diff]
    colorMoved = zebra
[rebase]
    autoStash = true
    autoSquash = true
[pretty]
  pretty-history = format:%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset
[alias]
  changelog = show --name-only
  changes = log --oneline --decorate
  commitnumber = !git log --pretty=oneline | wc -l
  pretty = prettyhistory
  ph = prettyhistory
  prettyhistory = log --graph --pretty=pretty-history --abbrev-commit --date=relative
  ql = quicklog
  quicklog = log --pretty=format:'%Cblue%h %Cred%cD %Creset%cn %Cgreen%s%Creset' --date-order --graph
  undo = reset --soft --keep HEAD^
  unstage = reset HEAD
  username = config --get user.name
  purge = clean -fdx
```
