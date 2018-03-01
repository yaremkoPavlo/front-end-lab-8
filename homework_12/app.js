// Your code goes here
var rootNode = document.getElementById("root");

window.addEventListener('hashchange', function(e) {
  //console.log(e.oldURL + ' -> ' + e.newURL);
});

if (!location.hash) {
  rootNode.appendChild(madeThumbnails(tanks));
  console.log(`${location.hash} is empty`);
} else {
  let a = searchFirstTank(tanks, location.hash);
  //rootNode.appendChild(madeDetails(tanks[a]));
  console.log(`${location.hash} ${a}`);
}


function madeThumbnails(arr) {
  let div = document.createElement('div');
  div.className = 'thumbnails';
  for (let i = 0; i < arr.length; i++) {
    let divT = document.createElement('div'),
        imgP = document.createElement('img'),
        imgC = document.createElement('img');
    divT.className = 'tank';
    divT.addEventListener("click", (e) => {
      location.hash = encodeURIComponent(arr[i].model);
    })
    imgP.src = arr[i].preview;
    imgC.src = arr[i].country_image;
    divT.appendChild(imgP);
    divT.appendChild(imgC);
    div.appendChild(divT);
  }
  return div;
}

function madeDetails(obj) {
  let div = document.createElement('div');
  div.className = 'details';
  
  return div;
}

function searchFirstTank (arr, search) {
  let reg = decodeURI(search);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].model === reg.substring(1)) return i;
  }
}
