let data = [];


db.collection("instagram accounts").get().then((docs) => {
  docs.forEach((doc) => {
    data.push(doc.data())
  })
  data = data.sort(() => Math.random() - 0.5)

})




let name1 = document.getElementById("name1")
let name2 = document.getElementById("name2")
let followers1 = document.getElementById("followers1")
let followers2 = document.getElementById("followers2")
let container1= document.getElementById("container")
let container2 = document.getElementById("container2")





let i = 0;


const start = () => {

  followers1.innerHTML = data[i].followers.toLocaleString();
  
  name1.innerHTML = data[i].account;
  name2.innerHTML = data[i+1].account;
  container1.style.backgroundImage = `url(${data[i].photo})`
  container2.style.backgroundImage = `url(${data[i+1].photo})`
  container1.style.backgroundSize = "cover";
  container2.style.backgroundSize = "cover";
  
  x
  // console.log(`url(${data[i].photo})`)
  
}

const higher = () => {

  if(data[i].followers <= data[i+1].followers){

    name1.innerHTML = data[i+1].account;
    name2.innerHTML = data[i+2].account;
    followers1.innerHTML = data[i+1].followers.toLocaleString();
    container1.style.backgroundImage = `url(${data[i+1].photo})`
    container2.style.backgroundImage = `url(${data[i+2].photo})`
    container1.style.backgroundSize = "cover";
    container2.style.backgroundSize = "cover";
    // container1.style.transition = 'all 1s';
    // container1.style.left = '0%';
    // container1.style.transform = "translate(100%, 0)";
    // container2.style.transition = 'all 1s';
    // container2.style.left = '0%';
    // container2.style.transform = "translate(-100%, 0)";
    
  

    
    i++;

  }else{
    
    location.href="./gameover.html";
   


 
  }
}
  const lower = () => {

    if(data[i].followers >= data[i+1].followers){
      name1.innerHTML = data[i+1].account;
      name2.innerHTML = data[i+2].account;
      followers1.innerHTML = data[i+1].followers.toLocaleString();
      container1.style.backgroundImage = `url(${data[i+1].photo})`
      container2.style.backgroundImage = `url(${data[i+2].photo})` 
      container1.style.backgroundSize = "cover";
      container2.style.backgroundSize = "cover";
      // container1.style.transition = 'all 1s';
      // container1.style.left = '0%';
      // container1.style.transform = "translate(100%, 0)";
      // container2.style.transition = 'all 1s';
      // container2.style.left = '0%';
      // container2.style.transform = "translate(-100%, 0)";
      
      
      i++;
      
  
    }else{
      location.href="./gameover.html";
    }
  }
