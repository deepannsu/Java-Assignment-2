$(document).ready(function() {
    // Function to load content using AJAX
    function loadContent(url) {
        // Use AJAX to load content from the specified URL
        $.ajax({
            url: url,
            method: 'GET',
            success: function(data) {
                // Set the loaded content into the #content div
                $('#content').html(data);
            },
            error: function() {
                console.log('Error loading content.');
            }
        });
    }

    // Event handler for link clicks
    $('.load-content').click(function(e) {
        e.preventDefault(); // Prevent the default link behavior (navigation)
        var contentUrl = $(this).attr('href'); // Get the URL from the link's href attribute
        loadContent(contentUrl); // Load the content using AJAX
    });
});
