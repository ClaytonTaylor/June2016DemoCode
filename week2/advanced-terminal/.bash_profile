# awesome aliases

# vars
export ALIASES="$HOME/.bash_aliases"
# export EDITOR="vim"
export EDITOR="nano"

# bash
alias c="clear"
alias l="ls -phls"
alias lt="l -t"
alias la="l -a"
alias lg="l | grep "
alias ports="netstat -antp"
alias process="ps -A aux | grep"
alias untar="tar xvf "
alias untarbz="tar xvjf "
alias services="sudo service --status-all"
alias lpath='env | grep PATH'

# files
alias salias="c && source $ALIASES"
alias sbashrc="source $HOME/.bashrc"
alias calias="cat $ALIASES"
alias ealias="$EDITOR ALIASES"
alias ealias="$EDITOR $ALIASES"
alias eprofile="$EDITOR $HOME/.profile"
alias ebashrc="$EDITOR $HOME/.bashrc"

# git
alias g="gaa; gcm 'QuickCommit'; gpp"
alias ga="git add "
alias gaa="git add --all :/"
alias gb="git branch"
alias gc="git commit"
alias gco="git checkout "
alias gcam="git commit -am "
alias gcm="git commit -m "
alias gs="git status"
alias gp="git push "
alias gpl="git pull "
alias gplb="git pull origin "
alias gpo="git push origin"
alias gpp="gpl && gpo"
