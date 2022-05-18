var color_options = [
	{ name:'blue', code: '#0000fff', hue: 'dark'},
	{ name:'red', code: '#ff0000', hue: 'dark'},
	{ name:'pink', code: '#FFC0CB', hue: 'light'},
	{ name:'green', code: '#00ff00', hue: 'dark'},
	{ name:'orange', code: '#FFA500', hue: 'light'},
	{ name:'purple', code: '#800080', hue: 'dark'},
	{ name:'brown', code: '#A52A2A', hue: 'dark'},
	{ name:'yellow', code: '#FFFF00', hue: 'light'},
	{name: "apple", code: "#8DB600", hue: "light"},
	{name: "almond", code: "#ffebcd", hue: "dark"},
	{name: "aureolin", code: "#fdee00", hue: "dark"},
	{name: "blizzard blue", code: "#ace5ee", hue: "dark"},
	{name: "bole", code: "#79443b", hue: "light"},
	{name: "university red", code: "#cc0000", hue: "light"},
	{name: "bondi blue", code: "#0095b6", hue: "light"},
	{name: "bittersweet", code: "#fe6f5e", hue: "dark"},
	{name: "bazaar", code: "#98777b", hue: "dark"},
	{name: "byzantine", code: "#bd33a4", hue: "light"},
	{name: "bubblegum", code: "#ffc1cc", hue: "dark"},
	{name: "au lait", code: "#a67b5b", hue: "dark"},
	{name: "celadon", code: "#ace1af", hue: "dark"},
	{name: "coral", code: "#ff7f50", hue: "dark"},
	{name: "cotton candy", code: "#ffbcd9", hue: "dark"},
	{name: "dark lava", code: "#483c32", hue: "light"},
	{name: "drab", code: "#967117", hue: "light"},
	{name: "eggshell", code: "#f0ead6", hue: "dark"},
	{name: "fawn", code: "#e5aa70", hue: "dark"},
	{name: "folly", code: "#ff004f", hue: "dark"},
	{name: "fulvous", code: "#e48400", hue: "light"},
	{name: "ghost white", code: "#f8f8ff", hue: "dark"},
	{name: "gainsboro", code: "#dcdcdc", hue: "dark"},
	{name: "han blue", code: "#446ccf", hue: "dark"},
	{name: "harvard crimson", code: "#c90016", hue: "light"},
	{name: "honeydew", code: "#f0fff0", hue: "dark"},
	{name: "icterine", code: "#fcf75e", hue: "dark"},
	{name: "international orange", code: "#ff4f00", hue: "dark"},
	{name: "jasper", code: "#d73b3e", hue: "dark"},
	{name: "lilac", code: "#c8a2c8", hue: "dark"},
	{name: "magnolia", code: "#f8f4ff", hue: "dark"},
	{name: "mantis", code: "#74c365", hue: "light"},
	{name: "malachite", code: "#0bda51", hue: "light"},
	{name: "myrtle", code: "#21421e", hue: "light"},
	{name: "nadeshiko pink", code: "#f6adc6", hue: "dark"},
	{name: "ochre", code: "#cc7722", hue: "light"},
	{name: "papaya", code: "#ffc281", hue: "dark"},
	{name: "patriarch", code: "#800080", hue: "light"},
	{name: "peridot", code: "#e6e200", hue: "light"},
	{name: "puce", code: "#cc8899", hue: "dark"},
	{name: "plum", code: "#dda0dd", hue: "dark"},
	{name: "ruddy", code: "#ff0028", hue: "light"},
	{name: "scarlet", code: "#ff2400", hue: "light"},
	{name: "seashell", code: "#fff5ee", hue: "dark"},
	{name: "silver", code: "#c0c0c0", hue: "light"},
	{name: "smalt", code: "#003399", hue: "light"},
	{name: "umber", code: "#635147", hue: "light"}
];

// var color_options_raw = `
// Apple 8DB600 

// Almond ffebcd

// Aureolin fdee00

// Blizzard blue ace5ee

// Bole 79443b

// Boston University Red cc0000 

// Bondi Blue 0095b6

// Bittersweet fe6f5e

// Bazaar 98777b

// Byzantine bd33a4

// Bubble  e7feff

// Bubblegum ffc1cc

// Café au lait a67b5b

// Celadon ace1af

// Coral ff7f50

// Cotton candy ffbcd9

// Dark lava 483c32

// Drab 967117

// Eggshell f0ead6

// Fawn e5aa70

// Folly ff004f

// Fulvous e48400

// Ghost white f8f8ff

// Gainsboro dcdcdc

// Han blue 446ccf

// Harvard crimson c90016

// Honeydew f0fff0

// Icterine fcf75e

// International orange ff4f00

// Jasper d73b3e

// Lilac c8a2c8

// Magnolia f8f4ff

// Mantis 74c365

// Malachite 0bda51

// Myrtle 21421e
 
// Nadeshiko pink f6adc6

// Ochre cc7722

// Papaya ffc281
// Patriarch 800080

// Peridot e6e200

// Puce cc8899

// Plum dda0dd

// Ruddy ff0028

// Scarlet ff2400

// Seashell fff5ee

// Silver c0c0c0

// Smalt 003399

// Umber 635147
// `;
// const pattern = /([A-Za-z]+\s?[A-Za-z]+)\s([A-Fa-f0-9]+)\s*[\r\n]+/g;
// const found = [...color_options_raw.matchAll(pattern)];
// const idx_last = found.length - 1;
// var json = '[';
// var sixteenToTen = {
// 	0: 0,
// 	1: 1,
// 	2: 2,
// 	3: 3,
// 	4: 4,
// 	5: 5,
// 	6: 6,
// 	7: 7,
// 	8: 8,
// 	9: 9,
// 	A: 10,
// 	B: 11,
// 	C: 12,
// 	D: 13,
// 	E: 14,
// 	F: 15
// };

// found.forEach((arr, i)=>{
// 	let name = arr[1];
// 	let code = arr[2];
// 	let code_arr = code.split('');
// 	var hue = 0;
// 	code_arr.forEach( (digit, j)=>{
// 		hue += sixteenToTen[digit.toUpperCase()];
// 	});
// 	if(hue > 44)
// 		hue = 'dark';
// 	else
// 		hue = 'light';
// 	json += '{name: "' + name.toLowerCase() + '", code: "#'+code+'", hue: "' + hue + '"}';
// 	if(i != idx_last)
// 	{
// 		json += ',\n';
// 	}
// });
// json+= ']';
// console.log(json);
