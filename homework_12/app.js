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
  rootNode.appendChild(madeDetails(tanks[a]));
  console.log(`${location.hash} ${a}`);
}


function madeThumbnails(arr) {
  let div = document.createElement('div'),
      h1 = document.createElement('h1');

  h1.innerHTML = "Most popular tanks";
  div.className = 'thumbnails';
  div.appendChild(h1);

  for (let i = 0; i < arr.length; i++) {
    let divT = document.createElement('div'),
        imgT = document.createElement('img'),
        imgC = document.createElement('img'),
        h4 = document.createElement('h4');
        lv = document.createElement('span'),
        model = document.createElement('span');

    imgT.src = arr[i].preview;
    imgC.src = arr[i].country_image;

    //make review under tank image
    lv.appendChild(document.createTextNode(arr[i].level));
    model.appendChild(document.createTextNode(arr[i].model));
    h4.appendChild(imgC);
    h4.appendChild(lv);
    h4.appendChild(model);

    divT.addEventListener("click", (e) => {
      location.hash = encodeURIComponent(arr[i].model);
    });
    divT.className = 'tank';
    divT.appendChild(imgT);
    divT.appendChild(h4);
    div.appendChild(divT);
  }
  return div;
}

function madeDetails(obj) {
  let div = document.createElement('div'),
      h1 = document.createElement('h1');

  div.className = 'tank-details';

  return div;
}

function searchFirstTank (arr, search) {
  let reg = decodeURI(search);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].model === reg.substring(1)) return i;
  }
}
