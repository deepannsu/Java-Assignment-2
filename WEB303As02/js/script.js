$(document).ready(function() {
    // Function to load content using AJAX and animate
    function loadAndAnimateContent(url) {
        // Hide content with animation
        $('#content').fadeOut('fast', function() {
            // Clear the content
            $(this).empty();

            // Load new content using AJAX
            $.ajax({
                url: url,
                method: 'GET',
                success: function(data) {
                    // Add the loaded content to #content
                    $('#content').html(data);

                    // Animate the content with fadeIn
                    $('#content').fadeIn('fast');
                },
                error: function() {
                    console.log('Error loading content.');
                }
            });
        });
    }

    // Event handler for link clicks
    $('.load-content').click(function(e) {
        e.preventDefault();
        var contentUrl = $(this).attr('href');
        
        // Check if the clicked link is different from the current content
        if (contentUrl !== $('#content').data('current-url')) {
            loadAndAnimateContent(contentUrl);
            $('#content').data('current-url', contentUrl); // Store the current URL
        }
    });
});
$(document).ready(function() {
    // Function to load content using AJAX and animate
    function loadAndAnimateContent(url) {
        // Hide content with animation
        $('#content').fadeOut('fast', function() {
            // Clear the content
            $(this).empty();

            // Load new content using AJAX
            $.ajax({
                url: url,
                method: 'GET',
                success: function(data) {
                    // Add the loaded content to #content
                    $('#content').html(data);

                    // Animate the content with fadeIn
                    $('#content').fadeIn('fast');
                },
                error: function() {
                    console.log('Error loading content.');
                }
            });
        });
    }

    // Event handler for link clicks
    $('.load-content').click(function(e) {
        e.preventDefault();
        var contentUrl = $(this).attr('href');
        
        // Check if the clicked link is different from the current content
        if (contentUrl !== $('#content').data('current-url')) {
            loadAndAnimateContent(contentUrl);
            $('#content').data('current-url', contentUrl); // Store the current URL
        }
    });
});

