# how to write a comment!

# echo - prints out whatever string follows echo
# echo 'Spiderman is awesome'

# declaring environment variables to be loaded in each session
export PORT=1337
export REPO='https://github.com/RefactorU/June2016DemoCode.git'

# aliases are awesome! use them!
alias cloneJune="git clone $REPO"
alias c="clear"
alias l="ls -phls"
alias la="l -a"

alias ealias="nano $HOME/.bash_profile"
alias salias="source $HOME/.bash_profile"
alias hello="echo 'hello'"

# these are very cool too :)
timestamp() {
  date +"%T"
}

#function timestamp {
#  date +"%T"
#}

    function backup {
        cp -r "$1" "$HOME/backup/"
        mv "$HOME/backup/$(basename $1)" "$HOME/backup/$(basename $1)_$(date)"
    }
