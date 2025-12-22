<?php
// 1. START THE SESSION (Must be at the very top)
session_start();

// Handle "Login" (Set Session)
if (isset($_POST['login_btn'])) {
    // We store data in the $_SESSION superglobal array
    $_SESSION['username'] = $_POST['user_input'];
    $_SESSION['role'] = 'Student';
    $_SESSION['login_time'] = date("h:i:sa");
}

// Handle "Logout" (Destroy Session)
if (isset($_POST['logout_btn'])) {
    // remove all session variables
    session_unset();
    // destroy the session
    session_destroy();

    // Refresh the page to show the login screen again
    header("Location: " . $_SERVER['PHP_SELF']);
    exit();
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>PHP Session Demo</title>
    <style>
        body {
            font-family: sans-serif;
            padding: 40px;
            text-align: center;
        }

        .container {
            border: 1px solid #ccc;
            padding: 30px;
            display: inline-block;
            border-radius: 10px;
            width: 300px;
        }

        input {
            padding: 8px;
            width: 80%;
            margin-bottom: 10px;
        }

        button {
            padding: 8px 15px;
            cursor: pointer;
        }

        .dashboard {
            background-color: #e3f2fd;
            padding: 20px;
            border-radius: 8px;
        }

        .login-box {
            background-color: #f9f9f9;
            padding: 20px;
            border-radius: 8px;
        }
    </style>
</head>

<body>

    <div class="container">

        <?php if (isset($_SESSION['username'])): ?>

            <div class="dashboard">
                <h2 style="color:green">Welcome, <?php echo $_SESSION['username']; ?>!</h2>
                <p><strong>Role:</strong> <?php echo $_SESSION['role']; ?></p>
                <p><strong>Login Time:</strong> <?php echo $_SESSION['login_time']; ?></p>

                <hr>

                <form method="post" action="">
                    <button type="submit" name="logout_btn" style="background:#ffcccc;">Logout</button>
                </form>
            </div>

        <?php else: ?>

            <div class="login-box">
                <h2>Please Login</h2>
                <form method="post" action="">
                    <label>Enter Name:</label><br>
                    <input type="text" name="user_input" required placeholder="e.g. John"><br>
                    <button type="submit" name="login_btn" style="background:#ccffcc;">Login</button>
                </form>
            </div>

        <?php endif; ?>

    </div>

</body>

</html>