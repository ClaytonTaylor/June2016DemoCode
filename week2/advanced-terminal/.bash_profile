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
alias sayHello="echo hello"
alias whatsMyHome="echo $HOME"

# my favs
alias ealias="nano $HOME/.bash_profile"
alias salias="source $HOME/.bash_profile"

# functions are very cool too :)
# two ways to make them:

# way 1
timestamp() {
  date +"%T"
}

# way 2
# function timestamp {
#   date +"%T"
# }
