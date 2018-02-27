var rootNode = document.getElementById("root");

// Your code goes here
function renderFolder (folder) {
	let ul = document.createElement("ul"),
			li = document.createElement("li"),
			text = document.createTextNode(folder["title"]),
			iconFolder = document.createElement("i"),
			iconFile = document.createElement("i"),
			empty = document.createTextNode("folder is empty");

	iconFolder.className = "material-icons";;
	iconFolder.innerHTML = "folder";
	iconFile.className = "material-icons";
	iconFile.innerHTML = "insert_drive_file";

	li.appendChild(text);
	ul.appendChild(li);
	ul.style.display = "none";

	if (folder["folder"]) {
		li.insertBefore(iconFolder, li.childNodes[0]);
		li.className = "folder"
		li.onclick = showContent;
		ul.className = "parent";
	} else {
		li.insertBefore(iconFile, li.childNodes[0]);
		li.className = "file";
	}

	if (folder["children"]) {
		for (let i = 0; i < folder["children"].length; i++) {
			ul.appendChild(renderFolder(folder["children"][i]))
		}
	} else if (folder["children"] === null || folder["children"] === false) {
		ul.appendChild(renderFolder({title: "Folder is empty"}));
	}

	return ul;
}

function renderTree(data) {
	let ul = document.createElement("ul"),
			li = document.createElement("li");
	for (let i = 0; i < data.length; i++) {
		li.appendChild(renderFolder(data[i]));
	}
	ul.appendChild(li);

	//display first folders
	let target = li.childNodes;
	for (let i = 0; i < target.length; i++) {
		target[i].style.display = "block";
	}

	return ul;
}

function showContent(event) {
	let target = event.target || event.srcElement,
			parentTarget = target.parentNode,
			childTarget = parentTarget.childNodes;

	for (let i = 1; i < childTarget.length; i++) {
		if (childTarget[i].style.display === "none") {
			target.childNodes[0].innerHTML = "folder_open";
			childTarget[i].style.display = "block";
		} else {
			target.childNodes[0].innerHTML = "folder";
			childTarget[i].style.display = "none";
		}
	}
	return parentTarget;
}

rootNode.appendChild(renderTree(structure));
