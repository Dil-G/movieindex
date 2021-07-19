$(document).ready (()=>{
    $('#searchForm').on('submit', (e)=>{
    let searchText = $('#searchText').val();
    getMovies(searchText);
    e.preventDefault();
})
});

function getMovies(searchText){
    var $moviess = $('#movies')
    
    axios.get('https://www.omdbapi.com/?apikey=1206dbec&t='+searchText)
    .then((response)=>{
        console.log(response)
        let movies = response;
        let output = '';

        $.each(movies,function(index,movie){
            output = `
            <ul  class="box">

                        <li class="column">
                        <div class="well text-center">
                            <img src="${response.data.Poster}" />
                            <h2>${response.data.Title}</h2>
                            <a onclick="selectMovie('${response.data.Title}')" class="btn is-info" href="#">Movie details</a>
                        </div>
                        </li>
                       
            </ul>
                        `;
        });

        jQuery('#movies').html(output);
    })
    .catch((err)=>{
        console.log(err)
    })
    // $moviess.append('<li>Title: '+response.data.Title+'</li>')
}
    function selectMovie(id){
        sessionStorage.setItem('movieID',id);
        console.log(sessionStorage.getItem('movieID'));
        window.location='movie.html';
        return false;
    }

    function getMovie(){
        let moviewID = sessionStorage.getItem('movieID');
console.log(moviewID);
        // var $moviess = $('#movies')
        
        axios.get('https://www.omdbapi.com/?apikey=1206dbec&t='+moviewID)
        .then((response)=>{
            console.log(response)
            let movies = response;
        let output = '';

        $.each(movies,function(index,movie){
            output = `
            <h1 class="title is-3">${response.data.Title}</h1>
            <hr/>
                <div class="container">
               
              
            <div  class="box">
            <div class="columns">

                        <div class="column is-3">
                            <img src="${response.data.Poster}" />
                            </div>
                            <div class="column">

                            <h1 class=" is-1">${response.data.Title}</h1>
                            <p>${response.data.Plot}</p>
                            <p>${response.data.Year}</p>
                            <p>${response.data.Genre}</p>
                            <p>${response.data.Runtime}</p>
                            <p>${response.data.Language}</p>
                        </div>
                       
            </div>
            </div>
            </div>
                        `;
        });

        jQuery('#movies').html(output);
          
        })
        .catch((err)=>{
            console.log(err)
        })

    }


    

// $(function getMovies(searchText){

//     var $movies = $('#movies')
//     $.ajax({
//         type:'GET',
//         url : 'http://www.omdbapi.com/?i=tt3896198&apikey=1206dbec&'+searchText,
//         success: function(movies){
//             $.each(movies,function(i,movie){
//                 console.log(movie);
//                 // $movies.append('<li>Title: '+movie.Title+'</li>')
//             });
//         }
//     })
// });

// function getMovies(searchText){

// $.ajax({

//     type: "GET",
//     url: 'http://www.omdbapi.com/?i=tt3896198&apikey=1206dbec&'+searchText,
//     dataType: "json",
//     success: function (data) {
//         // data = JSON.parse(data)
//        console.log(data.length);

//         for (var i = 0; i<data.length; i++) {
//             $("#movies").append(new Option(data.d[i], data.d[i]));
//         }
//     },
//     error: function (result) {
//         console.log("Error");
//     }

// })
// }
