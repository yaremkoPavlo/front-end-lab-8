var rootNode = document.getElementById("root");

// Your code goes here
function renderFolder (folder) {
	let ul = document.createElement("ul"),
			li = document.createElement("li"),
			liEmp = document.createElement("li"),
			text = document.createTextNode(folder["title"]),
			empty = document.createTextNode("Folder is empty");
	li.appendChild(text);
	ul.appendChild(li);

	if (folder["children"]) {
		for (let i = 0; i < folder["children"].length; i++) {
			li.appendChild(renderFolder(folder["children"][i]))
		}
	} else if (folder["children"] === null || folder["children"] === false) {
		liEmp.appendChild(empty);
		li.appendChild(liEmp);
		ul.appendChild(li);
	}

	if (folder["folder"]) {
		li.className = "folder";
	} else {
		li.className = "file";
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
	return ul;
}

rootNode.appendChild(renderTree(structure));
