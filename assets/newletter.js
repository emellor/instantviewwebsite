function sendEmail() {

        var email = $("#email").val(); // get email field value
      //  var name = $("#name").val(); // get name field value
       // var msg = $("#msg").val(); // get message field value
        $.ajax(
        {
            type: "POST",
            url: "https://mandrillapp.com/api/1.0/messages/send.json",
            data: {
                'key': 'yf0HWszs9JLKcCOaB24Jmw',
                'message': {
                    'from_email': 'contact@instantview.co',
                    'from_name': 'Instantview Website',
                    'headers': {
                        'Reply-To': email
                    },
                    'subject': 'Newsletter Form Submission',
                    'text': ' Email: ' + email,
                    'to': [
                    {
                        'email': 'e.w.mellor@gmail.com',
                        'name': 'Edward Mellor',
                        'type': 'to'
                    }]
                }
            }
        })
        .done(function (response) {


            //alert('Your message has been sent and will will contact you shortly. Thank you!'); // show success message
          //  $("#name").val(''); // reset field after successful submission
            $("#email").val(''); // reset field after successful submission
         //   $("#message").val(''); // reset field after successful submission
        })
        .fail(function (response) {
            alert('Error sending message.');
        });
        return false; // prevent page refresh
    }



  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-56821743-1', 'auto');
ga('send', 'pageview');

