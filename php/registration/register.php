<?php
include "db.php";

$username = $email = $password = $confirm_password = "";
$errors = [];

if ($_SERVER["REQUEST_METHOD"] === "POST") {

    // USERNAME VALIDATION
    if (empty($_POST["username"])) {
        $errors[] = "Username is required";
    } elseif (!preg_match("/^[a-zA-Z0-9_]{3,20}$/", $_POST["username"])) {
        $errors[] = "Username must be 3–20 characters";
    } else {
        $username = trim($_POST["username"]);
    }

    // EMAIL VALIDATION
    if (empty($_POST["email"])) {
        $errors[] = "Email is required";
    } elseif (!filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Invalid email format";
    } else {
        $email = trim($_POST["email"]);
    }

    // PASSWORD VALIDATION
    if (empty($_POST["password"])) {
        $errors[] = "Password is required";
    } elseif (strlen($_POST["password"]) < 6) {
        $errors[] = "Password must be at least 6 characters";
    } else {
        $password = $_POST["password"];
    }

    // CONFIRM PASSWORD
    if ($_POST["password"] !== $_POST["confirm_password"]) {
        $errors[] = "Passwords do not match";
    }

    // IF NO ERRORS → INSERT
    if (empty($errors)) {
        $hashed_password = password_hash($password, PASSWORD_DEFAULT);

        $stmt = $conn->prepare(
            "INSERT INTO users (username, email, password) VALUES (?, ?, ?)"
        );
        $stmt->bind_param("sss", $username, $email, $hashed_password);

        if ($stmt->execute()) {
            header("Location: success.php");
            exit;
        } else {
            $errors[] = "Username or email already exists";
        }
    }
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Registration</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<h2>User Registration</h2>

<?php
foreach ($errors as $error) {
    echo "<p class='error'>$error</p>";
}
?>

<form method="post">
    <input type="text" name="username" placeholder="Username" value="<?php echo htmlspecialchars($username); ?>" required>
    <input type="email" name="email" placeholder="Email" value="<?php echo htmlspecialchars($email); ?>" required>
    <input type="password" name="password" placeholder="Password" required>
    <input type="password" name="confirm_password" placeholder="Confirm Password" required>
    <button type="submit">Register</button>
</form>

</body>
</html>
