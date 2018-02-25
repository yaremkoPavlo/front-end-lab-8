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

	if (folder["children"] === null || folder["children"] === false) {
		liEmp.appendChild(empty);
		li.appendChild(liEmp);
		ul.appendChild(li);
	}

	if (folder["children"]) {
		for (let i = 0; i < folder["children"].length; i++) {
			li.appendChild(renderFolder(folder["children"][i]))
		}
	}

	if (folder["folder"]) {
		li.className = "folder";
	} else {
		li.className = "file";
	}
	return ul;
}



rootNode.appendChild(renderFolder(structure[0]));
