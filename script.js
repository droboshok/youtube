var key = 'AIzaSyBz2Tt3NTX5XJCpZ7WpWsdWJurlq42bUvM';

        // var key = 'MY_KEY';
        var urlReg ='https://www.googleapis.com/youtube/v3/playlistItems?key='+key;
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
      
