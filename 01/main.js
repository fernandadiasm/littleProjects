function clock() {
    let hours = document.getElementById('hour');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');
    let ampm = document.getElementById('ampm');

    let now = new Date();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    let am = "AM";

    //se a hora atual for maior que 12, a hora é subtraída por 12 e a variável am é atualizada para PM
    if (h > 12) {
        h = h - 12;
        am = "PM"
    }

    //converte as vairáveis em strings com duas casas decimais usando o operador ternário e a concatenação de strings.
    h = (h < 10) ? "0" + h : h
    m = (m < 10) ? "0" + m : m
    s = (s < 10) ? "0" + s : s

    //os valores atualizados das variáveis são atribuídos aos elementos HTML correspondentes usando innerHTML
    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    ampm.innerHTML = am
}

//o relógio é atualizado a cada segundo, pois a função clock é chamada repetidamento pelo setInterveral.
let interval = setInterval(clock, 1000);