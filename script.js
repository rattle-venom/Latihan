var thehours = new Date().getHours();
	var themessage;
	var morning = ('Selamat Pagi Rizka :3');
	var afternoon = ('Selamat Siang dedek emeush:3');
	var evening = ('Selamat Malam bebz :3');
	var afternoon2 = ('Selamat Sore Zheyenk')
	var sleep = ('Selamat Tidur Pandaaaa')

	if (thehours >= 0 && thehours < 12) {
		themessage = morning; 

	} else if (thehours >= 12 && thehours < 15) {
		themessage = afternoon;

	} else if (thehours >= 18 && thehours < 20) {
		themessage = evening;

	} else if (thehours >= 15 && thehours < 18) {
		themessage = afternoon2;

	} else if (thehours >= 20 && thehours < 24) {
		themessage = sleep;
	
	}

	$('.greeting').append(themessage);