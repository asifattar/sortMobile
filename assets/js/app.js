var cl = console.log;

const selectMobile = document.getElementById(`selectMobile`);

const all = [...document.querySelectorAll(`.all`)]

const changeMobile = (eve) => {
    let getmobile = eve.target.value
    cl(getmobile)
    all.forEach(div => div.classList.add(`d-none`));
    let getdivs=[...document.querySelectorAll("."+getmobile)]
     getdivs.forEach(div => div.classList.remove("d-none"))
}

selectMobile.addEventListener(`change` ,changeMobile)






//selectMobile.addEventListener(`change` ,onchangeMobile)//












//const selectColour = document.getElementById(`selectColour`)

//const all = [...document.querySelectorAll(`.all`)];

////const onchangColour = (eve)=> {
  //  let getcolour = eve.target.value;
   // cl(getcolour)
  //  all.forEach(div => div.classList.add("d-none"));
  //  let getdivs = Array.from(document.querySelectorAll("."+getcolour));
  //  getdivs.forEach(div => div.classList.remove("d-none"))
//}

//selectColour.addEventListener(`change`,onchangColour)














