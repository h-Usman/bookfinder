function findBook(){
    var userSearch =  document.getElementById('userInput').value;
    
    var bookResult = document.getElementById('result');

    bookResult.innerHTML = "";

    $.ajax({
        type:"GET",
        url: "https://www.googleapis.com/books/v1/volumes?q=" + userSearch,
        datatype: "JSON",
        success: function(book){
            console.log(book);
            for(var i = 0; book.items.length; i++){
                var wrapppperDiv = document.createElement('div');
                wrapppperDiv.className = 'media';
                var image = document.createElement('img');
                image.className = 'mr-3';
            image.src = book.items[i].volumeInfo.imageLinks.thumbnail;
           
             var div = document.createElement('div');
             div.className = 'media-body';
             var header = document.createElement('h5');
            header.className = 'mt-0';
            header.innerHTML = book.items[i].volumeInfo.title;
            div.appendChild(header);
            wrapppperDiv.appendChild(image);
            wrapppperDiv.appendChild(div);
            var author = document.createElement('h6');
            author.innerHTML = book.items[i].volumeInfo.authors;
            div.appendChild(author);

            var country = document.createElement('p');
            country.innerHTML = 'Country  ' + book.items[i].accessInfo.country;
            div.appendChild(country);
            
            var desp = document.createElement('p');
            desp.innerHTML = book.items[i].volumeInfo.description;
            div.appendChild(desp);
    
            var line = document.createElement('hr');
            bookResult.appendChild(wrapppperDiv);
            bookResult.appendChild(line);
            }x
        }
    })
} 