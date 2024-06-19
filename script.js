
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Google Clone</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
        }

        #search-container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        #search-box {
            width: 400px;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            display: flex;
        }

        #search-input {
            flex: 1;
            border: none;
            padding: 5px;
        }

        #search-btn {
            background-color: #f8f9fa;
            border: 1px solid #ccc;
            border-radius: 3px;
            padding: 5px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <div id="search-container">
        <div id="search-box">
            <input type="text" id="search-input" placeholder="Search Google">
            <button id="search-btn">Google Search</button>
        </div>
    </div>

    