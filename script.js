var key = 'AIzaSyBz2Tt3NTX5XJCpZ7WpWsdWJurlq42bUvM';
var chanal = 'AndrewAmelin';
var id = 'UCuWDPleC6fu-WyDxZmp76SA';
var like = "LLuWDPleC6fu-WyDxZmp76SA";
        // var key = 'MY_KEY';
        var urlReg ='https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=20&playlistId=PL-osiE80TeTvGhHkpvfmKWOiIPF8UVy6c&key='+key;
        // var urlReq = 'https://www.googleapis.com/youtube/v3/videos?id='+vid+'&key='+key+'&part=snippet,contentDetails,statistics';
        console.log("Request URI:",urlReg);
        $.ajax({
            type: "GET",
            dataType: "json",
            ///dataType: "html",
            url: urlReg,
            // data: { b:true }
        }).done(function(data){
              console.log(data);


// https://www.googleapis.com/youtube/v3/channels?part=contentDetails&forUsername=AndrewAmelin&key=
// https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=20&playlistId=PL-osiE80TeTvGhHkpvfmKWOiIPF8UVy6c&key=

// https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId=UCuWDPleC6fu-WyDxZmp76SA&maxResults=20&key=

// https://www.googleapis.com/youtube/v3/playlistItems?part=playlistItem&playlistId=playlistId&videoId=videoId&key=AIzaSyBz2Tt3NTX5XJCpZ7WpWsdWJurlq42bUvM




            // console.log("Response Data:",res);
            // var $form = $('form')
            //     ,item = res.items[0]
            // ///,duration = item.contentDetails.duration
            //     ,author = item.snippet.channelTitle
            //     ,add = item.snippet.publishedAt
            //     ,title = item.snippet.title
            //     ,views = item.statistics.viewCount
            //     ;
            // $form.find('input[name="vid"]').val(vid);
            // $form.find('input[name="url"]').val('https://www.youtube.com/embed/'+vid);
            // $form.find('input[name="author"]').val(author);
            // $form.find('input[name="add"]').val(add);
            // $form.find('textarea[name="title"]').val(title);
            // $form.find('input[name="views"]').val(views);
      
  });
      
