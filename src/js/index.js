let messages = [
    {
        messages: "hi",
        id: 1
    },
    {
        messages: "how are you?",
        id: 2
    }, 
    {
        messages: "fine",
        id: 3
    }
]

const counter = document.querySelector(".counter");
counter.innerHTML = messages.length;
console.log(messages.length, "Nell");
const seenMessage = document.querySelector('input');
const listsText = document.querySelector('.list');
const messageHTML = messages.map(item => `
    <ul>
    <li>
     ${item.messages}
    </li>
    </ul>`

).join(' ');
listsText.innerHTML = messageHTML;
console.log(seenMessage);

seenMessage.addEventListener('click', function(){
   counter.remove()
});