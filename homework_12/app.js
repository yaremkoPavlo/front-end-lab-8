// Your code goes here
var rootNode = document.getElementById("root");

window.addEventListener('hashchange', function(e) {
  let child = rootNode.childNodes[0];
  if (!location.hash) {
    rootNode.removeChild(child);
    rootNode.appendChild(madeThumbnails(tanks));
  } else {
    rootNode.removeChild(child);
    let a = searchFirstTank(tanks, location.hash);
    rootNode.appendChild(madeDetails(tanks[a]));
  }
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

function madeDetails(tank) {
  let div = document.createElement('div'),
      h1 = document.createElement('h1'),
      imgC = document.createElement('img'),
      imgT = document.createElement('img'),
      back = document.createElement('div');

  imgC.src = tank.country_image;
  imgT.src = tank.preview;

  div.className = 'tank-details';
  h1.appendChild(imgC);
  h1.appendChild(document.createTextNode(tank.model));
  div.appendChild(h1);
  back.innerHTML = "Back to list view";
  back.addEventListener("click", (e) => {
    location.hash = '';
  });
  div.appendChild(back);

  return div;
}

function searchFirstTank (arr, search) {
  let reg = decodeURI(search);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].model === reg.substring(1)) return i;
  }
}
