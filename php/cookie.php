<?php
// ==========================================
// PHP LOGIC (MUST BE AT THE VERY TOP)
// ==========================================

$message = "";
$cookie_name = "username";
$cookie_value = "Student_01";

// 1. CREATE COOKIE (Triggered by button click)
if (isset($_POST['create_btn'])) {
    // Syntax: setcookie(name, value, expire_time, path)
    // 86400 = 1 day in seconds
    setcookie($cookie_name, $cookie_value, time() + (86400 * 30), "/");

    $message = "Cookie 'username' has been created! <br> (Refresh the page to see it strictly)";
}

// 2. DELETE COOKIE (Triggered by button click)
if (isset($_POST['delete_btn'])) {
    // To delete, set the expiration time to the PAST (time() - 3600)
    setcookie($cookie_name, "", time() - 3600, "/");

    // We also unset it from the current array so the UI updates immediately
    unset($_COOKIE[$cookie_name]);

    $message = "Cookie 'username' has been deleted!";
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>PHP Cookie Demo</title>
    <style>
        body {
            font-family: sans-serif;
            padding: 40px;
            text-align: center;
        }

        .box {
            border: 2px solid #333;
            display: inline-block;
            padding: 20px;
            border-radius: 10px;
        }

        button {
            padding: 10px 20px;
            cursor: pointer;
            margin: 5px;
        }

        .msg {
            background: #f0f0f0;
            padding: 10px;
            margin-top: 15px;
            color: blue;
        }

        .status {
            margin-bottom: 20px;
            font-weight: bold;
            font-size: 1.2em;
        }
    </style>
</head>

<body>

    <div class="box">
        <h2>Cookie Manager</h2>

        <div class="status">
            Current Cookie Status:
            <?php
            // 3. READ COOKIE
            if (isset($_COOKIE[$cookie_name])) {
                echo "<span style='color:green'>Found! Value: " . $_COOKIE[$cookie_name] . "</span>";
            } else {
                echo "<span style='color:red'>Not Set / Empty</span>";
            }
            ?>
        </div>

        <form method="post" action="">
            <button type="submit" name="create_btn" style="background:#d4edda;">Create Cookie</button>
            <button type="submit" name="delete_btn" style="background:#f8d7da;">Delete Cookie</button>
            <button type="submit" name="refresh_btn">Refresh Page</button>
        </form>

        <?php if ($message != ""): ?>
            <div class="msg"><?php echo $message; ?></div>
        <?php endif; ?>

    </div>

</body>

</html>