# Visual Studio Code Configuration

## Installation or re-installation

To make use of some of these tricks, vs-code should be available from the console (command line).
An easy way to ensure this is to install it through [brew](https://brew.sh/), this can be done even if you already have it installed without harm.

``` shell
brew cask install visual-studio-code
# brew cask installs macOS apps, fonts and plugins and other non-open source software
```

## Console shortcuts

``` shell
# to open vscode from the console
code . # will open a new vscode in the current folder
code . -r # will reload the current vscode in the current folder
code [file] # will open the specified file
```

## In app shortcuts

- `control` + ``` ` ``` -> Opens the attached terminal
- `command` + `p` -> Opens a fuzzy search command window, you can navigate your project files with this
  - `>` -> adding this changes to vscode commands
    - try searching for `format document`, `sort lines __`, `blame`
