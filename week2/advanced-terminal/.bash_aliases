export ALIASES="$HOME/.bash_aliases"
export PROFILE="$HOME/.bash_profile"
export BASHRC="$HOME/.bashrc"
# export EDITOR="vim"
export EDITOR="nano"

#=========================================================================================================#
# ALIASES
#=========================================================================================================#

# unix
alias c="clear"
alias l="ls -gphlsX"
alias la="l -A"
alias lt="l -t"
alias lg="l | grep "
alias ll="la"
alias grep="grep --color=auto"

# files
alias salias="source $ALIASES"
alias calias="cat $ALIASES"
alias ealias="$EDITOR $ALIASES"
alias eprofile="$EDITOR $PROFILE"
alias ebashrc="$EDITOR $BASHRC"

# git
alias commit="git rev-parse HEAD"
alias g="gaa; gcm 'QuickCommit'; gpl; gpo"
alias ga="git add"
alias gaa="git add --all :/"
alias gb="git branch"
alias gbls="git branch -a"
alias gcm="git commit -m"
alias gcam="git commit -am"
alias gco="git checkout"
alias gp="git push"
alias gpl="git pull"
alias gplo="git pull origin"
alias gplom="git pull origin master"
alias gpo="git push origin"
alias gpom="git push origin master"
alias gpp="gpl && gpo"
alias gpmpm="gplom && gpom"
alias grmls="git remote -v"
alias gs="git status"

# command line formatting
# PS1="${debian_chroot:+($debian_chroot)}\[$LITEGREEN\]\u@\h\[$WHITE\]:\[$LITEBLUE\]\W\[$WHITE\] $ "
