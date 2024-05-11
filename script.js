function showAlert(){
    alert(Date(),show())

    let tanggal = new Date();
    Document.getElementById("Hasil").innerHTML - tanggal;

    function show(){
        alert("Perkenalkan, aku Gordon. Aku adalah salah satu kereta senior tercepat dan terkuat berwarna biru. Selain itu, aku merupakan sosok yang pemaaf dan senang membantu kereta kecil ketika sedang dalam masalah.");
    }
}

function updateTimeAndGreetings() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    const formattedTime = `${hours % 12}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds} ${ampm}`;

    document.getElementById('real-time').innerText = formattedTime;

    let greetings;
    if (hours < 12) {
        greetings = 'Good morning!';
    } else if (hours >= 12 && hours < 18) {
        greetings = 'Good afternoon!';
    } else {
        greetings = 'Good evening!';
    }

    document.getElementById('greetings').innerText = greetings;
}

setInterval(updateTimeAndGreetings, 1000);

updateTimeAndGreetings();


