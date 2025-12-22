<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Radio Button Example</title>
    <style>
        body { font-family: sans-serif; padding: 20px; }
        .box { border: 1px solid #ccc; padding: 20px; border-radius: 8px; width: 300px; }
        .btn { margin-top: 15px; padding: 5px 15px; cursor: pointer; }
        .message { margin-top: 15px; padding: 10px; border-radius: 4px; }
        .success { background-color: #d4edda; color: #155724; border: 1px solid #c3e6cb; }
        .error { background-color: #f8d7da; color: #721c24; border: 1px solid #f5c6cb; }
        label { cursor: pointer; } /* Makes clicking the text select the button */
    </style>
</head>
<body>

<div class="box">
    <h3>Select Payment Method</h3>
    
    <form action="" method="POST">
        
        <div>
            <input type="radio" id="credit" name="payment" value="Credit Card">
            <label for="credit">Credit Card</label>
        </div>

        <div>
            <input type="radio" id="paypal" name="payment" value="PayPal">
            <label for="paypal">PayPal</label>
        </div>

        <div>
            <input type="radio" id="cod" name="payment" value="Cash on Delivery">
            <label for="cod">Cash On Delivery</label>
        </div>

        <button type="submit" name="submit_btn" class="btn">Proceed</button>
    </form>

    <?php
    if (isset($_POST['submit_btn'])) {

        // 1. Check if the radio button 'payment' is set (selected)
        if (isset($_POST['payment'])) {

            $selected_method = $_POST['payment'];

            echo "<div class='message success'>";
            echo "You chose: <strong>$selected_method</strong>";
            echo "</div>";

        } else {
            // 2. Handle error if nothing was selected
            echo "<div class='message error'>";
            echo "Please select a payment option!";
            echo "</div>";
        }
    }
    ?>
    
</div>

</body>
</html>