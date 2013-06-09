
function aksara() {
	var result = kestring(document.form.original.value);
	document.form.aksarain.value = result;
}

function kestring(aString) {
	aString = aString.toLowerCase();
	var last = aString.length;
	var result = "";
	for (var i = 0; i < last ; i++) {
		var tesdua = 'n';
		var siji = '';
		var loro = '';
		var balik = '';
		var ojonambah = 'n';

		siji = aString.charAt(i);
		if(i == 0) {
			if(siji == 'a') {
				balik = 'pa';
				tesdua = 'y';
				ojonambah = 'y';
			}
			if(siji == 'e') {
				balik = 'pe';
				tesdua = 'y';
				ojonambah = 'y';
			}
			if(siji == 'i') {
				balik = 'pi';
				tesdua = 'y';
				ojonambah = 'y';
			}
			if(siji == 'o') {
				balik = 'po';
				tesdua = 'y';
				ojonambah = 'y';
			}
			if(siji == 'u') {
				balik = 'pu';
				tesdua = 'y';
				ojonambah = 'y';
			}
			if(siji == 'p') {
				balik = '';
				tesdua = 'y';
				ojonambah = 'y';
			}
		}

		if(i < last-1) {
			loro = aString.charAt(i+1);
			if(siji == 'n' && loro == 'y') {
				balik = 'k';
				tesdua = 'y';
			}
			if(siji == 'n' && loro == 'g') {
				balik = 'l';
				tesdua = 'y';
			}
			if(siji == 'd' && loro == 'h') {
				balik = 'n';
				tesdua = 'y';
			}
			if(siji == 't' && loro == 'h') {
				balik = 'w';
				tesdua = 'y';
			}
		}

		if(i == last-1) {
		  if(siji == 't'){
		    balik = 'n';
		    tesdua = 'y';
		  }
		}

		if(tesdua == 'y') {
			result += balik;
			if(ojonambah == 'n')
				i++;
		}
		else result += kechar(aString.charAt(i))
	}
	return result;
}

function kechar(c) {
	if (c == 'a') {
		return 'a'
	}
	else if (c == 'ng') {
		return 'l'
	}
	else if (c == 'dh') {
		return 'n'
	}
	else if (c == 'th') {
		return 'w'
	}
	else if (c == 'ny') {
		return 'k'
	}
	else if (c == 'b') {
		return 's'
	}
	else if (c == 'c') {
		return 'j' 
	}
	else if (c == 'd') {
		return 'm'
	}
	else if (c == 'e') {
		return 'e'
	}
	else if (c == 'f') {
		return 'h' 
	}
	else if (c == 'g') {
		return 't'
	}
	else if (c == 'h') {
		return 'p'
	}
	else if (c == 'i') {
		return 'i'
	}
	else if (c == 'j') {
		return 'c'
	}
	else if (c == 'k') {
		return 'ny'
	}
	else if (c == 'l') {
		return 'ng'
	}
	else if (c == 'm') {
		return 'd'
	}
	else if (c == 'n') {
		return 'dh'
	}
	else if (c == 'o') {
		return 'o'
	}
	else if (c == 'p') {
		return 'h'
	}
	else if (c == 'q') {
		return 's'
	}
	else if (c == 'r') {
		return 'y'
	}
	else if (c == 's') {
		return 'b'
	}
	else if (c == 't') {
		return 'g'
	}
	else if (c == 'u') {
		return 'u'
	}
	else if (c == 'v') {
		return 'h'
	}
	else if (c == 'w') {
		return 'th'
	}
	else if (c == 'x') {
		return 'x'
	}
	else if (c == 'y') {
		return 'r'
	}
	else if (c == 'z') {
		return 'z'
	}
	return c;
}