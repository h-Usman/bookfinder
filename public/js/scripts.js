function findBook(){
    var userSearch =  document.getElementById('userInput').value;
    
    var bookResult = document.getElementById('result');

    bookResult.innerHTML = "";

    $.ajax({
        type:"GET",
        url: "https://www.googleapis.com/books/v1/volumes?q=" + userSearch,
        datatype: "JSON",
        crossdomain:true,
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

             var header = document.createElement('h2');
            header.className = 'mt-0';
            header.innerHTML = book.items[i].volumeInfo.title;
            div.appendChild(header);

            wrapppperDiv.appendChild(image);
            wrapppperDiv.appendChild(div);

            var author = document.createElement('h6');
            author.innerHTML = ' <b> Author: </b> ' + book.items[i].volumeInfo.authors;
            div.appendChild(author);

            var country = document.createElement('p');
            country.innerHTML = '<b>Country:  </b>' + book.items[i].accessInfo.country + ' ';
            div.appendChild(country);

            
            var pageCount = document.createElement('p');
            pageCount.innerHTML = '<b> Pages: </b>' + book.items[i].volumeInfo.pageCount;
            div.appendChild(pageCount);
            
            var publishedYear = document.createElement('p');
            publishedYear.innerHTML = '<b> Published: </b>'+ book.items[i].volumeInfo.publishedDate;
            div.appendChild(publishedYear);

            var publisher = document.createElement('p');
            publisher.innerHTML = ' <b>Publisher: </b>' + book.items[i].volumeInfo.publisher;
            div.appendChild(publisher);

            var desp = document.createElement('p');
            desp.innerHTML = book.items[i].volumeInfo.description;
            div.appendChild(desp);

            var link = document.createElement('a');
            link.innerHTML = "View more";
            link.href = book.items[i].volumeInfo.previewLink;
            div.appendChild(link);

            var line = document.createElement('hr');
            bookResult.appendChild(wrapppperDiv);
            bookResult.appendChild(line);
            }x
        }
    })
} 
