<?php
// =============================================================
// SECTION 1: BASICS, VARIABLES & DATA TYPES
// =============================================================
echo "<h3>--- 1. Variables & Types ---</h3>";

echo "hello 2 <br>";
echo "djdjf <br>";

// Variable Definitions
$a = 11;                // Integer
$b = false;             // Boolean (False)
$c = "jello";           // String
$d = 10.55555555555;    // Float (Decimal)
$e = 'C';               // String (Single char)
$f = true;              // Boolean (True)

// Variable Interpolation (Putting variables inside strings)
// Note: You must use Double Quotes "" for this to work.
echo "Integer: {$a} <br>";

// TRICKY PART: Booleans in echo
// 'true' prints as "1"
// 'false' prints as "" (empty string) - nothing shows up!
echo "Boolean False: '{$b}' (prints empty) <br>";
echo "Boolean True: '{$f}' (prints 1) <br>";

echo "String: {$c} <br>";
echo "Float: {$d} <br>";

// Checking Data Types (Debugging)
echo "Type of \$a: " . gettype($a) . "<br>";
var_dump($b); // var_dump shows the type and value (great for debugging)
echo "<br>";


// =============================================================
// SECTION 2: MATH & OPERATORS
// =============================================================
echo "<h3>--- 2. Math & Formatting ---</h3>";

// Concatenation vs Comma
echo $a + $d, " <br>";          // Comma separates arguments (slightly faster)
echo ($a + $d) . " <br>";       // Dot joins them into one string

// Exponentiation (Power of)
echo "11 to the power of 11: " . ($a ** $a) . " <br>";

// Modulo (Remainder)
echo "10 modulo 3 (Remainder): " . (10 % 3) . " <br>";

// Number Formatting
$num = 234.5678;
// Rounds to 2 decimal places and adds commas
echo "Formatted: " . number_format($num, 2) . " <br>";


// =============================================================
// SECTION 3: STRING MANIPULATION (New)
// =============================================================
echo "<h3>--- 3. String Functions ---</h3>";

$text = "  Code PHP  ";
echo "Original: '$text' <br>";
echo "Trimmed: '" . trim($text) . "' <br>";        // Removes extra spaces
echo "Length: " . strlen($text) . " chars <br>";   // Counts characters
echo "Uppercase: " . strtoupper($c) . " <br>";     // JELLO
echo "Replace: " . str_replace("jello", "hello", $c) . " <br>"; // jello -> hello


// =============================================================
// SECTION 4: CONTROL STRUCTURES (If/Switch)
// =============================================================
echo "<h3>--- 4. Conditionals ---</h3>";

// 4.1 If / Else
if ($d > $a) {
    echo "Result: if block ($d is bigger)<br>";
} else {
    echo "Result: else block ($a is bigger)<br>";
}

// 4.2 Switch Statement (Good for checking one variable against many values)
$grade = 'B';
switch ($grade) {
    case 'A':
        echo "Excellent!<br>";
        break;
    case 'B':
        echo "Good job!<br>";
        break;
    default:
        echo "Keep trying!<br>";
}

// 4.3 Ternary Operator (Short IF/ELSE)
// logic ? value_if_true : value_if_false
echo ($a > 10) ? "A is greater than 10 <br>" : "A is small <br>";


// =============================================================
// SECTION 5: LOOPS
// =============================================================
echo "<h3>--- 5. Loops ---</h3>";

// 5.1 For Loop (When you know how many times to run)
echo "<b>For Loop:</b> ";
for ($i = 0; $i < 5; $i++) {
    echo "$i ";
}
echo "<br>";

// 5.2 While Loop (Runs AS LONG AS condition is true)
echo "<b>While Loop:</b> ";
$j = 0;
while ($j <= 5) {
    echo "$j ";
    $j++;
}
echo "<br>";

// 5.3 Do-While Loop (Runs AT LEAST ONCE, even if condition is false)
echo "<b>Do-While:</b> ";
$k = 100;
do {
    echo "Runs once ($k)";
} while ($k < 5);
echo "<br>";


// =============================================================
// SECTION 6: FUNCTIONS
// =============================================================
echo "<h3>--- 6. Functions ---</h3>";

// Basic Function
// Defining return type (: int) is good practice in modern PHP
function add($x, $y): int
{
    return $x + $y;
}

// Calling the function
echo "Function Call 1: " . add(10, 12) . "<br>";
echo "Function Call 2: ", add(5, 5), "<br>";

// Variable Scope
$globalVar = "I am outside";
function testScope()
{
    // echo $globalVar; // This would ERROR! Functions can't see outside variables by default.
    global $globalVar;  // We must use 'global' keyword to import it
    echo "Inside function: $globalVar <br>";
}
testScope();


// =============================================================
// SECTION 7: ARRAYS
// =============================================================
echo "<h3>--- 7. Arrays ---</h3>";

// 7.1 Indexed Arrays (0, 1, 2...)
$arr = array(1, 2, 3, 4, 5);
// Short syntax: $arr = [1, 2, 3, 4, 5];

array_push($arr, 14); // Add to end
array_push($arr, 99);
array_pop($arr);      // Remove last item (99)

// Accessing manually
echo "Index 3 is: {$arr[3]} <br>";

// 7.2 Looping Indexed Arrays
echo "<b>Foreach Loop:</b> ";
foreach ($arr as $item) {
    echo "$item ";
}
echo "<br>";

// 7.3 Associative Arrays (Key => Value)
echo "<b>Associative Array:</b><br>";
$alphas = [
    "a" => "apple",
    "b" => "ball",
    "c" => "cat"
];

// Checking if a key exists
if (array_key_exists("a", $alphas)) {
    echo "Found 'a'! <br>";
}

// Looping Key and Value
foreach ($alphas as $key => $val) {
    // ucfirst() makes the first letter uppercase
    echo "Key: <b>$key</b> represents <b>" . ucfirst($val) . "</b><br>";
}

// 7.4 Useful Array Functions
echo "Count: " . count($arr) . " items<br>";
echo "In Array? " . (in_array(14, $arr) ? "Yes" : "No") . "<br>";


// =============================================================
// SECTION 8: SUPERGLOBALS (Server Info)
// =============================================================
echo "<h3>--- 8. Superglobals ---</h3>";

// $_SERVER holds info about headers, paths, and script locations
echo "Current File Path: " . $_SERVER['PHP_SELF'] . "<br>";
echo "Server Name: " . $_SERVER['SERVER_NAME'] . "<br>";
// echo "User Agent: " . $_SERVER['HTTP_USER_AGENT'] . "<br>";


// =============================================================
// SECTION 9: ERROR HANDLING (Try/Catch)
// =============================================================
echo "<h3>--- 9. Error Handling ---</h3>";

// This prevents the code from crashing if math fails
try {
    // Try to do something risky
    $dividend = 10;
    $divisor = 0; // You cannot divide by zero!

    if ($divisor == 0) {
        throw new Exception("Division by zero error.");
    }
    echo $dividend / $divisor;

} catch (Exception $e) {
    // Capture the error and show a nice message
    echo "Caught exception: " . $e->getMessage() . "<br>";
}

?>