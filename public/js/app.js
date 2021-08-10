
let data = [];

db.collection("movie").get().then((docs) => {
  docs.forEach((doc) => {
    data.push(doc.data())
  })
  data = data.sort(() => Math.random() - 0.5)
})

console.log(data)



let name1 = document.getElementById("name1")
let name2 = document.getElementById("name2")
let followers1 = document.getElementById("followers1")
let container1= document.getElementById("container1")
let container2 = document.getElementById("container2")
let followers2 = document.getElementById("r_ammount")
let R_TEXT = document.getElementById("r_ammount_text")
let score = document.getElementById("score")
let R_BUTTON = document.getElementById("higher")
let L_BUTTON = document.getElementById("lower")
let link1 = document.getElementById("link")
let link2 = document.getElementById("link2")
let i = 0;





setTimeout(() => {
  followers1.innerHTML = data[i].imdb.toLocaleString();
  followers2.innerHTML = data[i+1].imdb.toLocaleString();
  name1.innerHTML = data[i].name;
  name2.innerHTML = data[i+1].name;
  container1.style.backgroundImage = `url(${data[i].photo})`
  container2.style.backgroundImage = `url(${data[i+1].photo})`
  container1.style.backgroundSize = "cover";
  container2.style.backgroundSize = "cover";
  container1.style.transitionDelay ="2.5s";
  container2.style.transitionDelay ="2.5s";
  link1.href = data[i].photo;
  link2.href = data[i+1].photo;  
  link1.innerHTML = data[i].name;
  link2.innerHTML = data[i+1].name;  
  console.log(link1)
  console.log(link2)
}, 1000);

 

const start = () => {
   location.href="./classic.html "
  }

  // setTimeout(() => {
  //   followers1.innerHTML = data[i].imdb.toLocaleString();
  //   followers2.innerHTML = data[i+1].imdb.toLocaleString();
  //   name1.innerHTML = data[i].name;
  //   name2.innerHTML = data[i+1].name;
  //   container1.style.backgroundImage = `url(${data[i].photo})`
  //   container2.style.backgroundImage = `url(${data[i+1].photo})`
  //   container1.style.backgroundSize = "cover";
  //   container2.style.backgroundSize = "cover";
  //   container1.style.transitionDelay ="2.5s";
  //   container2.style.transitionDelay ="2.5s";
  //   link1.href = data[i].photo;
  //   link2.href = data[i+1].photo;    
  // }, 1000);





const higher = () => {
  if(data[i].imdb <= data[i+1].imdb){
    setTimeout(function(){  name1.innerHTML = data[i].name; link1.innerHTML = data[i].name; }, 2530)
    setTimeout(function(){  name2.innerHTML = data[i+1].name; link2.innerHTML = data[i+1].name; },2530)
    setTimeout(function(){ followers1.innerHTML = data[i].imdb.toLocaleString();}, 2530)
    container1.style.backgroundImage = `url(${data[i+1].photo})`
    container2.style.backgroundImage = `url(${data[i+2].photo})`
    Answer = true;
    followers2.innerHTML = data[i+1].imdb.toLocaleString();
    correct_animation_1();
    link1.href = data[i+1].photo;
    link2.href = data[i+2].photo;
    link1.innerHTML = data[i].name;
    link2.innerHTML = data[i+1].name;  
    i++;

  }else{
    followers2.innerHTML = data[i+1].imdb.toLocaleString();
    setTimeout(function(){ wrong_animation_1();}, 300)
    setTimeout(function(){ location.href="./gameover.html";;}, 2500)
  }
}

  const lower = () => {
    if(data[i].imdb >= data[i+1].imdb){
      setTimeout(function(){  name1.innerHTML = data[i].name; link1.innerHTML = data[i].name;}, 2530)
      setTimeout(function(){  name2.innerHTML = data[i+1].name; link2.innerHTML = data[i+1].name; },2530)
      setTimeout(function(){ followers1.innerHTML = data[i].imdb.toLocaleString();}, 2530)
      container1.style.backgroundImage = `url(${data[i+1].photo})`
      container2.style.backgroundImage = `url(${data[i+2].photo})` 
      followers2.innerHTML = data[i+1].imdb.toLocaleString();
      link1.href = data[i+1].photo;
      link2.href = data[i+2].photo;
      
      correct_animation_1();
      i++;
      
    }else{
    followers2.innerHTML = data[i+1].imdb.toLocaleString();
    setTimeout(function(){ wrong_animation_1();}, 300)
    setTimeout(function(){ location.href="./gameover.html";;}, 2500)
    }
  }
  var Answer;
    var isplayercorrect;
    let high_score = document.getElementById("hi_score")
    let current_score = document.getElementById("cur_score");
    // getting the players answer
    // in answer true = higher , false = lower
    // activating animations
    let VS = document.getElementById("vs_id");
    let BUTTON = document.getElementById("button_id")
    

    function correct_animation_1() {
       R_BUTTON.disabled = true;
        L_BUTTON.disabled = true;
        setTimeout(function(){   R_BUTTON.disabled = true;;},0)
        setTimeout(function(){   L_BUTTON.disabled = true;;},0)
        setTimeout(function(){ VS.innerHTML = ("");;}, 1000)
        setTimeout(function(){ VS.classList.add('vs_correct');},0)
        setTimeout(function(){ BUTTON.classList.add('button_dissapear');},0)
        setTimeout(animation_3, 300);
        setTimeout(animation_4, 2000);
        setTimeout(correct_animation_1_2, 3000);
        setTimeout(correct_animation_2, 4000);
        setTimeout(function(){  R_BUTTON.disabled = false;},4000)
        setTimeout(function(){   L_BUTTON.disabled = false;},4000)
    }
    function correct_animation_1_2() {
        VS.innerHTML = ("VS")
    }
    function correct_animation_2() {
       R_BUTTON.disabled = true;
        L_BUTTON.disabled = true;
        BUTTON.classList.remove('button_dissapear');
        VS.classList.remove('vs_correct');
    }
    function animation_3() {
        followers2.classList.remove("invisible");
        R_TEXT.classList.remove("invisible")
        followers2.classList.add("right_ammount_appear");
        R_TEXT.classList.add("right_ammount_appear")
        // setTimeout(function(){ followers2.classList.remove("invisible");}, 3000)
        // setTimeout(function(){ R_TEXT.classList.remove("invisible");},3000)
    }
    function animation_4() {
        // followers2.classList.add("invisible");
        // R_TEXT.classList.add("invisible");
      //  followers2.classList.remove("right_ammount_appear");
      //   R_TEXT.classList.remove("right_ammount_appear")
        setTimeout(function(){ followers2.classList.add("invisible");}, 500)
        setTimeout(function(){ R_TEXT.classList.add("invisible");},500)
        setTimeout(function(){ followers2.classList.remove("right_ammount_appear");;}, 2200)
        setTimeout(function(){ R_TEXT.classList.remove("right_ammount_appear");},2200)
        
    }
    function wrong_animation_1() {
      setTimeout(function(){ VS.innerHTML = ("");;}, 0)
      setTimeout(function(){ VS.classList.add('vs_wrong');},0)
      setTimeout(function(){ BUTTON.classList.add('button_dissapear');;},0)
      setTimeout(animation_3, 300);
      // setTimeout(wrong_animation_2, 2500);
    }
    // const L_BUTTON = document.getElementById("lower")
    // const R_BUTTON = document.getElementById("higher") 
    // function button_enable() {
    //     R_BUTTON.disabled = false;
    //     L_BUTTON.disabled = false;
    // }