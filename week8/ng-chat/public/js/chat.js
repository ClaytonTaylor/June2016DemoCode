angular.module('app', [])


angular.module('app')
    .controller('chatController', ['$scope', '$http', function($scope, $http){
        var chat = this;
        chat.chatMessage = ''
        chat.loggedInUsers = []
        chat.messageHistory = []

        $http({
            method : 'GET',
            url    : '/api/me',
        }).then(function(returnData){
            console.log(returnData)
            if ( returnData.data.user ) {
                chat.user = returnData.data.user
            }
        })

        // calling `io()` fires the `connection` event on the server
        console.log('CALLING SOCKET')
        var socket = io()
        socket.on('loggedInUsers', function(data){
            chat.loggedInUsers = data
            console.log(chat.loggedInUsers)
            
            // hey angular, you might have missed it, but something changed on chat. Please double check, and then update the view.
            $scope.$apply()
            console.log(data)
        })
        socket.on('chatMessage', function(data){
            console.log('chat message? ', data)
            chat.messageHistory.push(data)
            $scope.$apply()
        })
        socket.on('whisper', function(data){
            console.log(data.sender + ': ' + data.content)
        })

        chat.sendMessage = function(event){
            // first, check if the key pressed was the return key
            if ( event.which === 13 ) {
                if ( chat.chatMessage[0] != '/' ) {
                    socket.emit('chatMessage', chat.chatMessage)
                }
                else {
                    var recipient = chat.chatMessage.split(' ')[0].slice(1)
                    var content   = chat.chatMessage.split(' ').slice(1).join(' ')
                    // var recipient = chat.chatMessage
                    socket.emit('whisper', {
                        recipient:recipient,
                        content:content
                    })
                }
                chat.chatMessage = ''
            }
        }
    }])