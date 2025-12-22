<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>GET vs POST Example</title>
    <style>
        body {
            font-family: sans-serif;
            padding: 20px;
        }

        .container {
            display: flex;
            gap: 50px;
        }

        .box {
            border: 1px solid #ccc;
            padding: 20px;
            border-radius: 8px;
            width: 45%;
        }

        .result {
            background: #e8f4f8;
            padding: 10px;
            margin-top: 15px;
            border-left: 5px solid #007bff;
        }

        h2 {
            margin-top: 0;
            color: #333;
        }

        input {
            padding: 5px;
            margin-bottom: 5px;
        }
    </style>
</head>

<body>

    <h1>PHP Form Handling: GET vs POST</h1>

    <div class="container">

        <div class="box">
            <h2>1. GET Method</h2>
            <p><i>Notice: After clicking search, look at your browser URL bar.</i></p>

            <form action="" method="GET">
                <label>Search Item:</label><br>
                <input type="text" name="search_item" placeholder="e.g. Laptop" required>
                <button type="submit">Search</button>
            </form>

            <?php
            // PHP Code to handle the GET request
            if (isset($_GET['search_item'])) {
                // htmlspecialchars prevents security issues (XSS)
                $item = htmlspecialchars($_GET['search_item']);
                echo "<div class='result'>";
                echo "<strong>GET Result:</strong> You are searching for '$item'.";
                echo "</div>";
            }
            ?>
        </div>

        <div class="box">
            <h2>2. POST Method</h2>
            <p><i>Notice: The URL bar does NOT change when you submit this.</i></p>

            <form action="" method="POST">
                <label>Username:</label><br>
                <input type="text" name="username" placeholder="User" required><br>

                <label>Password:</label><br>
                <input type="password" name="password" placeholder="Pass" required><br><br>

                <button type="submit">Login</button>
            </form>

            <?php
            // PHP Code to handle the POST request
            if ($_SERVER["REQUEST_METHOD"] == "POST") {
                $user = htmlspecialchars($_POST['username']);
                $pass = htmlspecialchars($_POST['password']);

                echo "<div class='result'>";
                echo "<strong>POST Result:</strong> Data received securely.<br>";
                echo "User: $user <br>";
                echo "Pass: $pass";
                echo "</div>";
            }
            ?>
        </div>

    </div>

</body>

</html>