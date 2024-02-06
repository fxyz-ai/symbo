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
})