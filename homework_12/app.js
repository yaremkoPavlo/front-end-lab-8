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

//first opening render
if (!location.hash) {
  rootNode.appendChild(madeThumbnails(tanks));
} else {
  let a = searchFirstTank(tanks, location.hash);
  rootNode.appendChild(madeDetails(tanks[a]));
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
      span = document.createElement('span'),
      span2 = document.createElement('span'),
      imgC = document.createElement('img'),
      imgT = document.createElement('img'),
      back = document.createElement('div'),
      rDiv = document.createElement('div'),
      lDiv = document.createElement('div'),
      h4Pr = document.createElement('h4'),
      h4Dt = document.createElement('h4');

  imgC.src = tank.country_image;
  imgT.src = tank.preview;

  //head of div
  div.className = 'tank-details';
  h1.appendChild(imgC);
  span.appendChild(document.createTextNode(tank.model));
  span2.appendChild(document.createTextNode("(level "+tank.level+")"));
  h1.appendChild(span);
  h1.appendChild(span2);
  div.appendChild(h1);

  //left side of div
  lDiv.className = 'left';
  h4Pr.appendChild(document.createTextNode('Preview'))
  lDiv.appendChild(h4Pr);
  lDiv.appendChild(imgT);
  div.appendChild(lDiv);

  //right side of div
  rDiv.className = 'right';
  h4Dt.appendChild(document.createTextNode('Characteristic'));
  rDiv.appendChild(h4Dt);
  rDiv.appendChild(makeTable(tank.details));
  div.appendChild(rDiv);

  back.innerHTML = "Back to list view";
  back.addEventListener("click", (e) => {
    location.hash = '';
  });
  back.className = 'back';
  div.appendChild(back);

  return div;
}

function searchFirstTank (arr, search) {
  let reg = decodeURI(search);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].model === reg.substring(1)) return i;
  }
}

function makeTable(tablParam) {
  table = document.createElement('table');
  for (let key in tablParam) {
    let tr = document.createElement('tr'),
        th1 = document.createElement('th'),
        th2 = document.createElement('th');

        th1.appendChild(document.createTextNode(key.replace( /_/g, " " )));
        th2.appendChild(document.createTextNode(tablParam[key]));
        tr.appendChild(th1);
        tr.appendChild(th2);
        table.appendChild(tr);
  }
  return table;
}
