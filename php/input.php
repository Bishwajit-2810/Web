<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Secure Form</title>
    <style>
        .error {
            color: red;
            font-size: 0.9em;
        }

        .box {
            padding: 20px;
            border: 1px solid #ddd;
            width: 300px;
        }

        input {
            display: block;
            margin-bottom: 5px;
            width: 90%;
        }
    </style>
</head>

<body>

    <?php
    // 1. Initialize variables
    $name = $email = "";
    $nameErr = $emailErr = "";

    // 2. Helper Function
    // The "Golden Rule" Function
    function cleanInput($data)
    {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }

    // 3. Process Form
    if ($_SERVER["REQUEST_METHOD"] == "POST") {

        // --- Validate Name ---
        if (empty($_POST["name"])) {
            $nameErr = "Name is required";
        } else {
            $name = cleanInput($_POST["name"]);
            // Check if name only contains letters and whitespace
            if (!preg_match("/^[a-zA-Z-' ]*$/", $name)) {
                $nameErr = "Only letters and white space allowed";
                $name = ""; // clear invalid data
            }
        }

        // --- Validate Email ---
        if (empty($_POST["email"])) {
            $emailErr = "Email is required";
        } else {
            $email = cleanInput($_POST["email"]);
            // PHP built-in email validation
            if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
                $emailErr = "Invalid email format";
                $email = "";
            }
        }

        // Success Check
        if ($name && $email) {
            echo "<h3 style='color:green'>Success! clean data:</h3>";
            echo "Name: $name <br>";
            echo "Email: $email <br><hr>";
        }
    }
    ?>

    <div class="box">
        <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">

            <label>Name:</label>
            <input type="text" name="name" value="<?php echo $name; ?>">
            <span class="error"><?php echo $nameErr; ?></span>
            <br>

            <label>E-mail:</label>
            <input type="text" name="email" value="<?php echo $email; ?>">
            <span class="error"><?php echo $emailErr; ?></span>
            <br><br>

            <button type="submit">Submit</button>
        </form>
    </div>

</body>

</html>