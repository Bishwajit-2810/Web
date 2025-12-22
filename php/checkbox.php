<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Checkbox Example</title>
    <style>
        body { font-family: sans-serif; padding: 20px; }
        .box { border: 1px solid #ccc; padding: 20px; border-radius: 8px; width: 300px; }
        .btn { margin-top: 15px; padding: 5px 15px; cursor: pointer; }
        .message { margin-top: 15px; padding: 10px; border-radius: 4px; }
        .success { background-color: #d4edda; color: #155724; border: 1px solid #c3e6cb; }
        .error { background-color: #f8d7da; color: #721c24; border: 1px solid #f5c6cb; }
        label { cursor: pointer; margin-right: 10px; }
        .option { margin-bottom: 8px; }
    </style>
</head>
<body>

<div class="box">
    <h3>Select Your Favorite Fruits</h3>
    
    <form action="" method="POST">
        
        <div class="option">
            <input type="checkbox" id="apple" name="fruits[]" value="Apple">
            <label for="apple">Apple</label>
        </div>

        <div class="option">
            <input type="checkbox" id="orange" name="fruits[]" value="Orange">
            <label for="orange">Orange</label>
        </div>

        <div class="option">
            <input type="checkbox" id="banana" name="fruits[]" value="Banana">
            <label for="banana">Banana</label>
        </div>

        <button type="submit" name="submit_btn" class="btn">Submit</button>
    </form>

    <?php
    if (isset($_POST['submit_btn'])) {

        // 1. Check if ANY checkbox was selected
        if (isset($_POST['fruits'])) {

            // 2. Capture the array of selected items
            $selected_fruits = $_POST['fruits'];

            echo "<div class='message success'>";
            echo "<strong>You selected " . count($selected_fruits) . " items:</strong><br>";

            // 3. Loop through the array to display them
            echo "<ul>";
            foreach ($selected_fruits as $fruit) {
                echo "<li>" . htmlspecialchars($fruit) . "</li>";
            }
            echo "</ul>";
            echo "</div>";

        } else {
            // Handle case where user submits empty form
            echo "<div class='message error'>";
            echo "You didn't select anything!";
            echo "</div>";
        }
    }
    ?>
    
</div>

</body>
</html>