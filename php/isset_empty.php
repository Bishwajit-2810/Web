<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <style>
        body {
            font-family: sans-serif;
            padding: 20px;
            line-height: 1.6;
        }

        .box {
            border: 1px solid #ccc;
            padding: 15px;
            margin-bottom: 20px;
            background: #f9f9f9;
        }

        code {
            background: #eee;
            padding: 2px 5px;
            border-radius: 3px;
            font-weight: bold;
        }

        .true {
            color: green;
            font-weight: bold;
        }

        .false {
            color: red;
            font-weight: bold;
        }

        h3 {
            border-bottom: 2px solid #333;
            padding-bottom: 5px;
        }
    </style>
</head>

<body>

    <h1>PHP: isset() vs empty()</h1>

    <div class="box">
        <h3>1. Theory & Differences</h3>
        <ul>
            <li><code>isset($var)</code>: Returns <strong>TRUE</strong> if the variable exists AND is not NULL. <br>
                <em>(Think: "Is this variable set to something valid?")</em>
            </li>
            <li><code>empty($var)</code>: Returns <strong>TRUE</strong> if the variable is empty (0, "", NULL, false) OR
                doesn't exist. <br>
                <em>(Think: "Is this container empty or useless?")</em>
            </li>
        </ul>
    </div>

    <div class="box">
        <h3>2. Live Comparison</h3>

        <?php
        // ==========================================
        // DEFINE VARIABLES FOR TESTING
        // ==========================================
        $var1 = "Hello";    // Normal String
        $var2 = "";         // Empty String
        $var3 = 0;          // Zero (Integer)
        $var4 = NULL;       // NULL value
        // $var5 is NOT defined at all
        
        // Helper function to print results neatly
        function check($name, $val, $expression)
        {
            // We use boolean string conversion for display
            $res = $expression ? "<span class='true'>TRUE</span>" : "<span class='false'>FALSE</span>";
            echo "Checking <code>\$$name</code>: Result is $res <br>";
        }

        echo "<h4>Test A: isset()</h4>";
        // isset checks if it exists and is not null
        check("var1 (Hello)", $var1, isset($var1)); // TRUE (It has data)
        check("var2 (Empty)", $var2, isset($var2)); // TRUE (Empty string is still "set")
        check("var3 (0)", $var3, isset($var3)); // TRUE (0 is a value)
        check("var4 (NULL)", $var4, isset($var4)); // FALSE (NULL is considered "not set")
        
        // Special case for undefined variable
        $is_var5_set = isset($var5) ? "TRUE" : "FALSE";
        echo "Checking <code>\$var5 (Undefined)</code>: Result is <span class='false'>$is_var5_set</span> (Doesn't exist)<br>";


        echo "<h4>Test B: empty()</h4>";
        // empty checks if it has "falsy" or no value
        check("var1 (Hello)", $var1, empty($var1)); // FALSE (It is NOT empty)
        check("var2 (Empty)", $var2, empty($var2)); // TRUE (It IS empty)
        check("var3 (0)", $var3, empty($var3)); // TRUE (0 is considered empty in PHP!)
        check("var4 (NULL)", $var4, empty($var4)); // TRUE (NULL is empty)
        
        // Special case: empty() does NOT cause errors on undefined variables
        $is_var5_empty = empty($var5) ? "TRUE" : "FALSE";
        echo "Checking <code>\$var5 (Undefined)</code>: Result is <span class='true'>$is_var5_empty</span> (It is empty)<br>";
        ?>
    </div>

    <div class="box">
        <h3>3. Real World Form Example</h3>
        <form method="post" action="">
            <input type="text" name="username" placeholder="Type something (or leave 0)">
            <button type="submit" name="submit_btn">Check Input</button>
        </form>

        <?php
        if (isset($_POST['submit_btn'])) {
            echo "<hr>";
            $input = $_POST['username'];

            echo "<strong>You typed:</strong> '$input' <br><br>";

            // SCENARIO 1: isset()
            // This will ALWAYS be true if the form is submitted, even if box is blank
            if (isset($input)) {
                echo "1. <code>isset()</code> says: The variable exists (Form was sent).<br>";
            }

            // SCENARIO 2: empty()
            // This checks if the user actually typed real text
            if (empty($input)) {
                echo "2. <code>empty()</code> says: <span class='false'>The input is EMPTY!</span> (You typed nothing or 0).";
            } else {
                echo "2. <code>empty()</code> says: <span class='true'>The input has DATA!</span>";
            }
        }
        ?>
    </div>

</body>

</html>