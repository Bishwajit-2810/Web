<?php
// ====================================================
// ERROR REPORTING (LEARNING MODE)
// ====================================================
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// ====================================================
// DATABASE CONNECTION
// ====================================================
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "crud_app"; // MAKE SURE THIS DATABASE EXISTS

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Database connection failed: " . $conn->connect_error);
}

// ====================================================
// INITIAL VARIABLES
// ====================================================
$id = 0;
$name = "";
$email = "";
$update_mode = false;
$msg = "";

// ====================================================
// CREATE / UPDATE
// ====================================================
if (isset($_POST['save'])) {

    $id = isset($_POST['id']) ? (int) $_POST['id'] : 0;
    $name = trim($_POST['name']);
    $email = trim($_POST['email']);

    if ($id > 0) {
        // UPDATE
        $sql = "UPDATE users SET name='$name', email='$email' WHERE id=$id";
        if (!$conn->query($sql)) {
            die("Update failed: " . $conn->error);
        }
        $msg = "Record updated successfully!";
    } else {
        // INSERT
        $sql = "INSERT INTO users (name, email) VALUES ('$name', '$email')";
        if (!$conn->query($sql)) {
            die("Insert failed: " . $conn->error);
        }
        $msg = "New record created successfully!";
    }

    // Reset form state
    $id = 0;
    $name = "";
    $email = "";
    $update_mode = false;
}

// ====================================================
// DELETE
// ====================================================
if (isset($_GET['delete'])) {
    $id = (int) $_GET['delete'];
    $conn->query("DELETE FROM users WHERE id=$id");
    $msg = "Record deleted!";
}

// ====================================================
// EDIT
// ====================================================
if (isset($_GET['edit'])) {
    $id = (int) $_GET['edit'];
    $update_mode = true;

    $result = $conn->query("SELECT * FROM users WHERE id=$id");
    if ($result && $result->num_rows === 1) {
        $row = $result->fetch_assoc();
        $name = $row['name'];
        $email = $row['email'];
    }
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>PHP CRUD Application</title>

    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 900px;
            margin: auto;
            padding: 30px;
        }

        .alert {
            padding: 10px;
            background: #d4edda;
            border: 1px solid #c3e6cb;
            color: #155724;
            margin-bottom: 15px;
        }

        .form-container {
            background: #f8f8f8;
            padding: 20px;
            border-radius: 6px;
            margin-bottom: 30px;
        }

        input[type="text"],
        input[type="email"] {
            width: 45%;
            padding: 10px;
            margin-right: 10px;
        }

        button {
            padding: 10px 20px;
            border: none;
            color: white;
            cursor: pointer;
            border-radius: 4px;
        }

        .save {
            background: #28a745;
        }

        .update {
            background: #007bff;
        }

        table {
            width: 100%;
            border-collapse: collapse;
        }

        th,
        td {
            padding: 12px;
            border: 1px solid #ddd;
        }

        th {
            background: #333;
            color: white;
        }

        a {
            padding: 6px 10px;
            border-radius: 4px;
            text-decoration: none;
            color: white;
        }

        .edit {
            background: #ffc107;
            color: #000;
        }

        .delete {
            background: #dc3545;
        }
    </style>
</head>

<body>

    <h2>PHP MySQL CRUD Application</h2>

    <?php if ($msg != "") { ?>
        <div class="alert"><?php echo $msg; ?></div>
    <?php } ?>

    <div class="form-container">
        <form method="post" action="dbms_conn.php">
            <input type="hidden" name="id" value="<?php echo $id; ?>">

            <input type="text" name="name" placeholder="Enter Name" value="<?php echo $name; ?>" required>

            <input type="email" name="email" placeholder="Enter Email" value="<?php echo $email; ?>" required>

            <?php if ($update_mode) { ?>
                <button type="submit" name="save" class="update">Update</button>
                <a href="dbms_conn.php" style="margin-left:10px;">Cancel</a>
            <?php } else { ?>
                <button type="submit" name="save" class="save">Save</button>
            <?php } ?>
        </form>
    </div>

    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
            </tr>
        </thead>

        <tbody>
            <?php
            $result = $conn->query("SELECT * FROM users ORDER BY id DESC");
            while ($row = $result->fetch_assoc()) {
                ?>
                <tr>
                    <td><?php echo $row['id']; ?></td>
                    <td><?php echo $row['name']; ?></td>
                    <td><?php echo $row['email']; ?></td>
                    <td>
                        <a class="edit" href="dbms_conn.php?edit=<?php echo $row['id']; ?>">Edit</a>
                        <a class="delete" href="dbms_conn.php?delete=<?php echo $row['id']; ?>"
                            onclick="return confirm('Are you sure?')">Delete</a>
                    </td>
                </tr>
            <?php } ?>
        </tbody>
    </table>

</body>

</html>