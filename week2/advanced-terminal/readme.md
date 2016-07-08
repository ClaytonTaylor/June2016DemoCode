# Advanced Terminal

## Purpose
The purpose of this lecture is to make students feel more comfortable and productive at the command-line. By the end of this lecture, students should have a basic understanding of the following concepts:

- Dot files, specifically the `.bash_profile` file, what they are for, when it's run, etc.
- How to create variables and the difference between local and exported variables.
- The difference between single and double quotes in BASH.
- Some intermediate BASH commands that particularly useful
- How to compose more complex commands using shell **redirection**

### Dot files
`.bash_profile`
- executes every time you open a new terminal
- good place for customizing your terminal environment


### Useful commands
> Note: you can separate commands with a semicolon

`echo`
- prints stuff on the command line
```bash
    echo "Hello out there!"
```

`env`
- see all environment variables loaded into your session
```bash
    $ env
```

`grep`
- show bits and pieces of STDOUT
```bash
    $ env | grep $HOME
```

`cat`
- spits out the contents of a file
```bash
    $ cat $HOME/.bash_profile
```

`alias`
- set up one command to run another command
```bash
    $ alias c="clear"
    $ alias l="ls -phls"
    $ alias la="l -a"
    $ alias lg="l | grep "
    $ alias lt="l -t"
    # my favorites :)
    $ alias ealias="$EDITOR $ALIASES"
    $ alias salias="source $ALIASES"
```

`source`
- reloads the contents of a dot file (has other uses, see `man source`)
```bash
    $ source $HOME/.bash_profile
```

`function`
- like alias, but better!
```bash
    function can {
        cp -r "$1" ~/.Trash
        rm -r "$1"
    }
    # `$1` is the first argument passed into the function. `$2` is the second argument, etc.
```

`man`
- look up the manual for a specific command
```bash
    $ man ssh
```

### Variables
```bash
    $ greeting="hello bash" # local var:
    $ echo greeting # prints 'greeting'
    $ echo $greeting # prints 'hello bash'
    $ touch $greeting # creates files called 'hello' and 'bash'
    $ touch '$greeting' # creates a file called '$greeting'
    $ touch "$greeting" # creates a file called 'hello bash'
    $ export port=3000 # environment variable

    $ # exported variables are available to scripts, e.g. use process.env to access exported variables in node.js scripts.
    $ # put it in your .bash_profile to make it permanent
```

Use `$` to insert other expressions

```bash
    echo ls # prints 'ls'
    echo $(ls) # prints the contents of the current folder
```

### Automatic Backup

This function copies files to a folder called 'backup', and then renames them by putting a timestamp at the end of the filename.

```bash
    function backup {
        cp -r "$1" "$HOME/backup/"
        mv "$HOME/backup/$(basename $1)" "$HOME/backup/$(basename $1)_$(date)"
    }
```

### Shell Redirection (pipe)
- `>  : redirect STDOUT (take the output of a command and [write to]/[overwrite] a file)`
- `>> : append (take the output of a command and append it to a file)`
- `<  : redirect STDIN (take the contents of a file and pass it to a command)`
- `|  : pipeline (take the output of one command and pass it to another)`
```bash
    $ echo "file56" > files.txt
    $ echo "file31" >> files.txt
    $ echo "file25" >> files.txt
    $ echo "file77" >> files.txt
    $ echo "file48" >> files.txt

    $ sort < files.txt
    $ sort < files.txt > sorted_files.txt
    $ ls | grep files
```

### Web commands

`curl`
- an awesome and very powerful command that can make web requests from the command line with all kinds of options
```bash
    # trivial example
    $ curl https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css
    $ curl https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css -o bootstrap.min.css
```

`wget`
- similar to curl, also supports recursive fetching
```bash
    wget -r -nH -nd -np https://refactoru-lessons-brandante.c9users.io/June2016DemoCode/week2/bootstrap
```
