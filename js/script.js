(function() {
    'use strict';

    var $form = document.querySelector('[data-js="form"]');
    var $search = document.querySelector('[data-js="search"]');
    var $tbody = document.querySelector('[data-js="tbody"]');

    function getIndex(name) {
        var i = gameWords.indexOf(name.toUpperCase());
        if (i > -1) {
            return indexes[i];
        }

        $search.value = '';
        return false;
    }

    function selectTd(line, column) {
        var tr = $tbody.children[line];
        var td = tr.children[column];
        td.classList.add("color");
        $search.value = '';
    }

    var letras = [
        ['E', 'T', 'C', 'O', 'U', 'W', 'S', 'R', 'I', 'T', 'T', 'S', 'B', 'E', 'E', 'M', 'O', 'U'],
        ['I', 'R', 'S', 'V', 'M', 'P', 'O', 'T', 'D', 'E', 'D', 'E', 'J', 'D', 'E', 'T', 'Y', 'R'],
        ['S', 'I', 'G', 'E', 'T', 'E', 'L', 'I', 'N', 'S', 'A', 'T', 'U', 'R', 'N', 'O', 'F', 'A'],
        ['W', 'N', 'A', 'N', 'M', 'N', 'R', 'A', 'L', 'U', 'A', 'P', 'P', 'O', 'E', 'B', 'E', 'N'],
        ['H', 'D', 'N', 'U', 'A', 'F', 'I', 'C', 'N', 'I', 'E', 'L', 'I', 'C', 'N', 'I', 'M', 'O'],
        ['R', 'A', 'I', 'S', 'R', 'S', 'R', 'T', 'U', 'E', 'E', 'U', 'T', 'H', 'G', 'N', 'A', 'N'],
        ['N', 'D', 'M', 'B', 'T', 'L', 'T', 'T', 'E', 'R', 'T', 'T', 'E', 'O', 'T', 'C', 'K', 'H'],
        ['W', 'C', 'E', 'R', 'E', 'S', 'E', 'U', 'I', 'M', 'I', 'A', 'R', 'S', 'I', 'W', 'E', 'A'],
        ['R', 'H', 'D', 'Y', 'D', 'R', 'R', 'S', 'G', 'A', 'S', 'O', 'S', 'O', 'S', 'T', 'M', 'U'],
        ['E', 'E', 'E', 'W', 'R', 'O', 'L', 'H', 'O', 'U', 'L', 'P', 'E', 'S', 'R', 'T', 'A', 'M'],
        ['A', 'N', 'S', 'A', 'P', 'H', 'N', 'E', 'T', 'U', 'N', 'O', 'O', 'E', 'S', 'K', 'K', 'E'],
        ['I', 'A', 'A', 'A', 'U', 'M', 'N', 'C', 'A', 'L', 'I', 'S', 'T', 'O', 'N', 'E', 'E', 'A']
    ];

    var lines = [];

    letras.map(function(item, index) {
        lines[index] = document.querySelector('[data-js="line' + index + '"]');
    });

    letras.forEach(function(item, index) {
        letras[index].forEach(function(item) {
            lines[index].insertAdjacentHTML('beforeend', '<td>' + item + '</td>');
        });
    });

    var indexes = [
        [[2, 9], [2, 10], [2, 11], [2, 12], [2, 13], [2, 14], [2, 15]], // SATURNO
        [[10, 6], [10, 7], [10, 8], [10, 9], [10, 10], [10, 11]], // NETUNO
        [[1, 3], [2, 3], [3, 3], [4, 3], [5, 3]], // VENUS
        [[3, 4], [4, 4], [5, 4], [6, 4], [7, 4]], // MARTE
        [[2, 13], [3, 13], [4, 13], [5, 13], [6, 13], [7, 13], [8, 13], [9,13]], // ROCHOSOS
        [[7, 1], [7, 2], [7, 3], [7, 4], [7, 5]], // CERES
        [[3, 8], [3, 9], [3, 10]], // LUA 
        [[4, 16], [5, 16], [6, 16], [7, 16], [8, 16], [9, 16],[10,16],[11,16]], // MAKEMAKE
        [[5, 10], [6, 9], [7, 8], [8, 7], [9, 6]], // ERIS
        [[8, 8], [8, 9], [8, 10], [8, 11],[8,12],[8,13],[8,14]], // GASOSOS
        [[6, 17], [7, 17], [8, 17], [9, 17],[10,17],[11,17]], // HAUMEA 
        [[1, 12], [2, 12], [3, 12], [4, 12], [5, 12], [6, 12], [7, 12]], // JUPITER
        [[6, 7], [7, 6], [8, 5], [9, 4], [10, 3]], // TERRA 
        [[3, 11], [4, 11], [5, 11], [6, 11], [7, 11], [8, 11]], // PLUTAO
        [[0, 17], [1, 17], [2, 17], [3, 17], [4, 17]], // URANO
        [[1, 4], [2, 5], [3, 6], [4, 7],[5, 8],[6, 9],[7, 10],[8,11]], // MERCURIO
        [[1, 5], [2, 6], [3, 7], [4, 8],[5, 9],[6, 10],[7, 11],[8,12]] // PLANETAS
        
    ];

    var gameWords = [
        'SATURNO', 'NETUNO', 'VENUS', 'MARTE', 'ROCHOSOS', 'CERES',
        'LUA', 'MAKEMAKE', 'ERIS', 'GASOSOS', 'HAUMEA', 'JUPITER',
        'TERRA', 'PLUTAO', 'URANO', 'MERCURIO', 'PLANETAS'
    ];

    $form.addEventListener('submit', function(event) {
        event.preventDefault();
        var valueSearch = $search.value;
        var getIndexes = getIndex(valueSearch);
        if (getIndexes) {
            for (var i = 0; i < getIndexes.length; i++) {
                selectTd(getIndexes[i][0], getIndexes[i][1]);
            }
        } else {
            alert('Palavra não encontrada.');
        }
    }, false);

})();
