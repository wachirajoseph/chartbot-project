//elements
var sendBtn = document.getElementById('sendBtn');
var textbox = document.getElementById('textbox');
var chatContainer = document.getElementById('chatContainer');



function sendMessage(messageText){

    var messageElement = document.createElement('div');
    messageElement.classList.add('w-50');
    messageElement.classList.add('float-end');
    messageElement.classList.add('shadow-sm');
    messageElement.style.margin = "10px";
    messageElement.style.padding = "5px";

    messageElement.innerHTML = "<span>you:</span>"+
    "<span style="+"margin-top:10px; padding:10px"+">"+messageText+"</span>"


    chatContainer.appendChild(messageElement);
}


sendBtn.addEventListener('click', function(e){

    let messageText= textbox.value;
    sendMessage(messageText);
});