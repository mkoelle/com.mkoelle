# Git basics

## Folder layout

There is no right or wrong way to store your repositories on your computer, but there are easier and harder ways.

Two primary methods:

- Store everything un-nested in one central and flat `repo` or `src` style folder
  - pros: easy to start
  - cons: repo's with similar/matching names from different sources conflict
- Store everything in a nested folder structure matching the source url.
  - pros: no name conflicts, easy to navigate tree, declarative
  - cons: requires user to navigate more folders

I would recommend using the structured layout for downloading repos.

For example this is a simplified list of how this looks on my machine:

``` text
~/src
+-- git.nmlv.nml.com
    +-- koe7194
        +-- docs -> this repository
        +-- cx-clientcomm-utilities -> personal clone of cx-clientcomm-utilities
    +-- cx-clientcomm
        +-- apis
            +-- cx-clientcomm-utilities -> team repo for cx-clientcomm-utilities
+-- github.com
    +-- mkoelle
        +-- template-computer-setup -> some dude's scripted computer setup
```

## Commands

``` shell
# to download a repository
git clone [url]

# to checkout a branch
git checkout [branch name]

# to create a new branch and check it out at the same time.
git checkout -[b|B] [branch name] # capital 'B' forces the action, lowercase 'b' will fail if a branch by the same name already exists

# to get the current status of what files are modified or tracked.
git status

# to add files to be tracked (staged) by git
git add -A # all files, anywhere in the project
git add . # files from the current directory and deeper
git add [filename] # a specific file

# to finalize a change
git commit -m '[message]' # provide a description of what you want to change
git commit # if you leave off the -m modifier you will enter a vim like editor, type :q and return to exit

# to push code to the server for the current branch
git push
git push --set-upstream origin [branch] # when on a new branch, the first push will prompt you to set the remote (upstream) location

# to update the current branch from what is on the server
git pull # to get the latest updates from the master

# to update your computer with information about what is on the server
git fetch -p # the 'p' parameter will remove stale references to branches no longer on the server

# to list all branches
git branch # lists all local branches
git branch -a # lists branches locally and on the servers (default: remotes/origin)
git branch -[d|D]'branchName' # to delete a branch (capital 'D' forces the action)

git clean # Remove un-tracked files from the working tree
git --abort # to terminate or to end a process

git stash # to stash/save your changes
git stash pop # to bring your changes back for merging
```

- In Progress: git reset, and git revert

``` shell
git reset # moves a local branch backwards as if the commit had never been made (moves a local branch reference to an old commit). Does not work for a remote branch
git revert # moves a remote branch backwards as it the commit had never been made (moves a remote branch reference to an old commit). Works for a remote branch
```

## Resources

- [How to use VS Code as your Git editor, difftool, and mergetool](https://roboleary.net/vscode/2020/09/15/vscode-git.html)
