document.addEventListener('DOMContentLoaded',()=>{
    abcs="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let inter = null;
    document.getElementById("head").onmouseover=e=>{
        let iterat=0;
        clearInterval(inter);
        inter=setInterval(()=>{
            e.target.innerText=e.target.innerText.split("")
            .map((abc,index)=>{
                if(index<iterat){
                    return e.target.dataset.value[index];
                }

                return abcs[Math.floor(Math.random()*26)]
            }).join("");

            if(iterat>=e.target.dataset.value.length) clearInterval(inter);
            iterat+=1/3;
        },50);
    }

    let upcomingDate = new Date("mar 16, 2024 12:00:00").getTime();
    setInterval(() => {
        let curDate = new Date();
        let diff = upcomingDate - curDate;

        let dLeft = Math.floor(diff / (1000 * 60 * 60 * 24));
        let hLeft = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let mLeft = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        let sLeft = Math.floor((diff % (1000 * 60)) / 1000);

        if (sLeft < 0) {
            stopInterval();
        }

        document.getElementById('days').innerHTML = dLeft;
        document.getElementById('hours').innerHTML = hLeft;
        document.getElementById('minutes').innerHTML = mLeft;
        document.getElementById('seconds').innerHTML = sLeft;
    }, 1000);
})