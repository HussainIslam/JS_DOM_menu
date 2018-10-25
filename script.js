var menu = document.querySelector('.menu');
var pos = menu.getBoundingClientRect();

menu.addEventListener('click', function (){
    if(menu.querySelector('.menuItems')){
        var removeElement = document.querySelector('.menuItems');
        removeElement.parentNode.removeChild(removeElement);
    }
    else{
        var menuElement = document.createElement('div');
        menuElement.className = 'menuItems';
        
        //formatting the menu
        menuElement.style.position = 'fixed';
        menuElement.style.top = pos.bottom + 'px';
        menuElement.style.left = pos.left + 'px';
        menuElement.style.backgroundColor = 'lightgray';
        menuElement.style.width = 200 +'px';
        menuElement.style.height = 135 + 'px';
        
        //creating unordered list
        var ul = document.createElement('ul');
        ul.style.listStyle = 'none';
        ul.style.padding = 0;
        ul.style.margin = 0;

        
        //creating menuitem1
        var listItem1 = document.createElement('li');
        var listAnchor1 = document.createElement('a');
        listAnchor1.href = 'https://www.facebook.com';
        listAnchor1.innerText = 'Facebook';
        listAnchor1.style.color = 'black';
        listAnchor1.style.textDecoration = 'none';
        listItem1.style.paddingTop = 10 + 'px';
        listItem1.style.paddingBottom = 5 + 'px';
        listItem1.style.paddingLeft = 5 + 'px';
        listItem1.appendChild(listAnchor1);

        var listItem2 = document.createElement('li');
        var listAnchor2 = document.createElement('a');
        listAnchor2.href = 'https://www.youtube.com';
        listAnchor2.innerText = 'YouTube';
        listAnchor2.style.color = 'black';
        listAnchor2.style.textDecoration = 'none';
        listItem2.style.padding = 5 + 'px';
        listItem2.appendChild(listAnchor2);
        
        var listItem3 = document.createElement('li');
        var listAnchor3 = document.createElement('a');
        listAnchor3.href = 'https://www.linkedin.com';
        listAnchor3.innerText = 'LinedIn';
        listAnchor3.style.color = 'black';
        listAnchor3.style.textDecoration = 'none';
        listItem3.style.padding = 5 + 'px';
        listItem3.appendChild(listAnchor3);



        ul.appendChild(listItem1);
        ul.appendChild(document.createElement('hr'));
        ul.appendChild(listItem2);
        ul.appendChild(document.createElement('hr'));
        ul.appendChild(listItem3);
        ul.appendChild(document.createElement('hr'));
        menuElement.appendChild(ul);
        menu.appendChild(menuElement);
    }
    
}, false);

/*
div .menu
button
menuElement
ul
li
                a
            li
                a

*/