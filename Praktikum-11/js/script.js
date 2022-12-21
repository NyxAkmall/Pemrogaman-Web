document.querySelectorAll("a").forEach((a)=>{
    // Jika di Klik akan menjalankan fungsi conputerChoice()
    a.addEventListener("click", (element)=>{
        computerChoice(element);
    })
})
function computerChoice(element){
    // Pilihan User
    let pilihanUser = element.target.innerText;

    // Mengambil Element Pilihan Bot
    let pilihanBot = document.querySelector("#result");

    // Membuat Pilihan Bot Dengan Array
    let choices = ["Rock", "Paper", "Scissors"];

    // Pilihan Random Untuk Bot
    pilihanBot.innerHTML = choices[Math.round(Math.random()*2)];
    pilihanBot = pilihanBot.innerHTML

    // Jika Pilihan  Bot  == Pilihan Player (Draw)
    if(pilihanUser == pilihanBot){
        setTimeout(()=> alert("You Guys DRAW"), 300);
    }

    // Jika Pilihan Bot Menang
    if(pilihanBot == "Rock" && pilihanUser == "Scissors"){
        alert("Bot The WiNNER")
    }else if(pilihanBot == "Paper" && pilihanUser == "Rock"){
        alert("Bot The WiNNERR")
    }else if(pilihanBot == "Scissors" && pilihanUser == "Paper"){
        alert("Bot The WiNNERRR")
    }

    // Jika Pilihan User Menang
    if(pilihanUser == "Rock" && pilihanBot == "Scissors"){
        alert("User The WiNNER")
    }else if(pilihanUser == "Paper" && pilihanBot == "Rock"){
        alert("User The WiNNERR")
    }else if(pilihanUser == "Scissors" && pilihanBot == "Papper"){
        alert("User The WiNNERRR")
    }
}