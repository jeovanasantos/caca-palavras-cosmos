(function(){
	'use strict';

	var $form = document.querySelector('[data-js="form"]');
	var $search = document.querySelector('[data-js="search"]');
	var $tbody = document.querySelector('[data-js="tbody"]');

	function getIndex(name){
		if(gameWords.indexOf(name) > -1){
			var i = gameWords.indexOf(name);
			return indexes[i];
		}
		
		$search.value = '';
		return false;
	}

	function selectTd( line , column ){
		var tr = $tbody.children[line];
		var td = tr.children[column];
		td.classList.add("color");
		$search.value = '';
	}

	var letras = [
			['e','t','e','i','t','e','v','e','o','r','a','e','s','c','o','r','h','p','l','d','d','w'],
            ['p','a','d','u','t','s','s','l','s','s','h','s','a','t','u','r','n','o','d','t','h','a'],
            ['e','o','f','e','r','l','e','t','t','g','o','c','i','e','u','t','d','o','n','a','t','s'],
            ['e','l','t','t','r','s','s','e','r','a','v','a','l','g','e','d','c','h','s','o','a','r'],
            ['t','a','l','a','e','h','r','u','n','g','o','s','g','l','d','s','f','h','t','r','t','e'],
            ['r','e','i','a','t','o','r','d','h','e','r','n','u','a','e','d','h','w','e','t','y','f'],
            ['l','d','b','n','i','a','e','h','c','c','b','r','n','h','s','e','e','c','i','a','o','u'],
            ['o','l','i','d','n','y','o','i','e','h','i','u','y','l','l','o','v','o','p','n','a','l'],
            ['t','m','e','o','a','e','o','o','e','c','t','s','l','i','v','h','s','t','d','d','e','w'],
            ['u','a','a','l','w','i','k','o','o','n','a','u','o','o','h','n','t','o','u','b','e','t'],
            ['r','t','e','r','r','a','i','a','t','t','l','s','n','r','s','t','l','n','n','b','t','t'],
            ['a','u','e','o','t','r','s','p','e','l','f','r','e','e','k','a','r','s','h','o','i','h'],
            ['c','e','o','e','a','e','o','l','c','e','r','e','s','a','t','t','h','l','o','k','s','n'],
            ['i','h','r','c','v','u','i','i','r','m','e','u','t','r','a','n','s','l','a','ç','a','o'],
            ['a','e','a','v','h','t','h','a','l','l','t','p','l','u','t','a','o','n','e','f','a','i'],
            ['h','g','n','e','e','w','l','o','p','l','a','n','e','t','a','f','n','h','f','i','d','e']
	];

	var lines = [];

	letras.map(function(item, index){
		lines[index] = document.querySelector('[data-js="line'+ index +'"]');
	});

	letras.forEach(function(item, index){
		letras[index].forEach(function(item){
			lines[index].insertAdjacentHTML('beforeend', '<td>' + item + '</td>');
		});
	});

	var indexes = [ 
		[ [0,10], [1,9], [2,8], [3,7], [4,6], [5,5], [6,4], [7,3], [8,2] ], // asteroide
		[ [1,11], [1,12], [1,13], [1,14], [1,15], [1,16], [1,17]], // SATURNO
        [ [3,5], [3,6], [3,7], [3,8] ], // SERA
        [ [4,0], [4,1], [4,2] ], // ταια (TAIA, uma palavra grega)
        [ [5,4], [5,5], [5,6], [5,7], [5,8], [5,9] ], // ORDENHA
        [ [6,10], [6,11], [6,12], [6,13], [6,14] ], // RNHS
        [ [8,4], [8,5], [8,6], [8,7] ], // WIK
        [ [9,9], [9,10], [9,11], [9,12], [9,13], [9,14] ], // KOONA
        [ [12,4], [12,5], [12,6], [12,7], [12,8], [12,9], [12,10], [12,11], [12,12], [12,13], [12,14] ], // LOVA
        [ [13,13], [13,14], [13,15], [13,16], [13,17], [13,18], [13,19], [13,20] ], // TRANSLACAO
        [ [14,5], [14,6], [14,7], [14,8], [14,9], [14,10] ], // HALLT
        [ [15,7], [15,8], [15,9], [15,10], [15,11], [15,12], [15,13], [15,14] ], // PLANA
	]
	var gameWords = ['asteroide', 'saturno', 'plutao' ];

	$form.addEventListener('submit', function(event){
		event.preventDefault();
		var valueSearch = $search.value;
		var getIndexes = getIndex(valueSearch);
		for(var i = 0; i < getIndexes.length; i++){
			selectTd(getIndexes[i][0], getIndexes[i][1])
		}
	}, false);

}) ();