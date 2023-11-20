<!--
navs = new Array (	// pageID, navbar address, navbarID
	new Array (1, "research.htm", "Research work"),
	new Array (2, "heq0.htm", "assume h=0"),
	
	new Array (3, "heq1.htm", "assume h=1")	)
function navbar(page) {
	for (i=0; i<navs.length; i++) {
		if (page == navs[i][0]) { page = i; break } }
	var bar = '<table bgcolor=cyan><td><hr>';
	for (j=0; j<page; j++) bar = bar + '<a href="' + navs[j][1] + '">' + navs[j][2] + '</a> | |';
	bar = bar + '<b>' + navs[page][2] + '</b>';
	for (k=page/1+1; k<navs.length; k++) bar = bar + '| |<a href="' + navs[k][1] + '">' + navs[k][2] + '</a>';
	bar = bar + '<hr></td></table></p>';
	document.write(bar)
	}
//-->
