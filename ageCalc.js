let btn=document.getElementById("btn");
let reset=document.getElementById("reset");
function calculate(){
    setInterval(()=> {
        let birthDate=new Date(document.getElementById("dob").value);
        let now=new Date();
        let ageInMs=now.getTime()-birthDate.getTime();
        let ageInS=ageInMs/1000;
        let ageInMins=ageInS/60;
        let ageInHours=ageInMins/60;
        let ageInDay=ageInHours/24;
        let ageInMonth=ageInDay/30.4375;
        let ageInYear=ageInMonth/12;
        document.getElementById("year").innerHTML=Math.floor(ageInYear);
        document.getElementById("month").innerHTML=Math.floor(ageInMonth%12);
        document.getElementById("day").innerHTML=Math.floor(ageInDay%30.4375);
        document.getElementById("hour").innerHTML=Math.floor(ageInHours%24);
        document.getElementById("min").innerHTML=Math.floor(ageInMins%60);
        document.getElementById("sec").innerHTML=Math.floor(ageInS%60);
        // document.getElementById("sec").style.borderBottom="1px solid gray";
    },1000);
}
function clean(){
    window.location.reload();
}

btn.addEventListener("click",calculate);
reset.addEventListener("click",clean);