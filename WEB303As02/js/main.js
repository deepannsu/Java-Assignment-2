// WEB303 Assignment 2

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AJAX Content Loading</title>
</head>
<body>
    <ul>
        <li><a href="#" id="prospect">Prospect</a></li>
        <li><a href="#" id="convert">Convert</a></li>
        <li><a href="#" id="retain">Retain</a></li>
    </ul>
    <div id="content"></div>

    <script>
        // Function to load content using AJAX
        function loadContent(url) {
            var xhr = new XMLHttpRequest();

            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        // Content loaded successfully
                        document.getElementById('content').innerHTML = xhr.responseText;
                    } else {
                        console.log('Error loading content.');
                    }
                }
            };

            xhr.open('GET', url, true);
            xhr.send();
        }

        // Event handlers for link clicks
        document.getElementById('prospect').addEventListener('click', function(e) {
            e.preventDefault();
            loadContent('prospect.html');
        });

        document.getElementById('convert').addEventListener('click', function(e) {
            e.preventDefault();
            loadContent('convert.html');
        });

        document.getElementById('retain').addEventListener('click', function(e) {
            e.preventDefault();
            loadContent('retain.html');
        });
    </script>
</body>
</html>

