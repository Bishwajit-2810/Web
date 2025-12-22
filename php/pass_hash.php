<?php
session_start();
$message = "";

// ==========================================
// 1. REGISTRATION (HASHING)
// ==========================================
if (isset($_POST['register_btn'])) {
    $raw_password = $_POST['reg_password'];

    // PASSWORD_DEFAULT uses the strongest algorithm available (currently Bcrypt).
    // It automatically generates a random "salt" for you.
    $hashed_password = password_hash($raw_password, PASSWORD_DEFAULT);

    // Simulating a Database: We store the hash in a Session for this demo
    $_SESSION['stored_user'] = $_POST['reg_username'];
    $_SESSION['stored_hash'] = $hashed_password;

    $message = "<div class='success'>
                <strong>Registration Successful!</strong><br>
                Raw Password: $raw_password <br>
                Stored Hash: <span style='font-size:0.8em'>$hashed_password</span>
                </div>";
}

// ==========================================
// 2. LOGIN (VERIFYING)
// ==========================================
if (isset($_POST['login_btn'])) {
    $input_user = $_POST['login_username'];
    $input_pass = $_POST['login_password'];

    // Check if user exists (in our session simulation)
    if (isset($_SESSION['stored_user']) && $_SESSION['stored_user'] == $input_user) {

        // THE CRITICAL CHECK:
        // We do NOT compare strings (==). We use password_verify().
        if (password_verify($input_pass, $_SESSION['stored_hash'])) {
            $message = "<div class='success'>✅ Login Successful! Password Verified.</div>";
        } else {
            $message = "<div class='error'>❌ Wrong Password!</div>";
        }

    } else {
        $message = "<div class='error'>❌ User not found. Please register first.</div>";
    }
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Password Hashing Demo</title>
    <style>
        body {
            font-family: sans-serif;
            padding: 30px;
        }

        .container {
            display: flex;
            gap: 40px;
        }

        .box {
            border: 1px solid #ccc;
            padding: 20px;
            width: 300px;
            border-radius: 8px;
        }

        .success {
            background: #d4edda;
            color: #155724;
            padding: 10px;
            margin-bottom: 15px;
            border: 1px solid #c3e6cb;
        }

        .error {
            background: #f8d7da;
            color: #721c24;
            padding: 10px;
            margin-bottom: 15px;
            border: 1px solid #f5c6cb;
        }

        input {
            width: 90%;
            padding: 8px;
            margin-bottom: 10px;
        }

        button {
            cursor: pointer;
            padding: 8px 15px;
        }
    </style>
</head>

<body>

    <h2>PHP Secure Password Hashing</h2>

    <?php echo $message; ?>

    <div class="container">

        <div class="box">
            <h3>1. Register</h3>
            <p><i>This simulates saving to a DB.</i></p>
            <form method="post">
                <label>Username:</label>
                <input type="text" name="reg_username" required>

                <label>Password:</label>
                <input type="text" name="reg_password" required> <button type="submit" name="register_btn">Register
                    User</button>
            </form>
        </div>

        <div class="box">
            <h3>2. Login</h3>
            <p><i>This checks against the hash.</i></p>
            <form method="post">
                <label>Username:</label>
                <input type="text" name="login_username" required>

                <label>Password:</label>
                <input type="password" name="login_password" required>

                <button type="submit" name="login_btn">Test Login</button>
            </form>
        </div>

    </div>

</body>

</html>