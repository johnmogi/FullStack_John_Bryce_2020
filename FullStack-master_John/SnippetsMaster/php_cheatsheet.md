0. php time:  
echo date("l jS \of F Y h:i:s A");
date_default_timezone_set("israel");
echo "Server Time: " . date("H:i:s") . "<br>";

// simple reminder: <?php
// Output: 
echo "Hello<br>";
echo 1234 . "<br>";
echo "This is another line...<br>";
---------------------------------------------

// sample math: 
function add($a, $b) {
    return $a + $b;
}
function sub($a, $b) {
    return $a - $b;
}
---------------------------------------------


// Variables: 
$age = 30;
$str = "Cool";
echo "Age: " . $age . ", Text: " . $str . "<br>";
echo "Age: $age, Text: $str<br>";
---------------------------------------------
// Conditions:
if($age > 20) {
    echo "Age is larger than 20<br>";
}
elseif($age > 30) {
    echo "Age is larger than 30<br>";
}
else {
    echo "Age is smaller or equal to 20<br>";
}
---------------------------------------------
$grade = rand(0, 100);
if($grade >= 60) {
    echo "Grade: $grade --> Pass :-)<br>";
}
else {
    echo "Grade: $grade --> Fail :-(<br>";
}
echo "Grade: $grade --> " . ($grade >= 60 ? "Pass :-)" : "Fail :-(") ."<br>";
---------------------------------------------
// Loops: 
$i = 1;
while($i <= 10) {
    echo $i . ", ";
    $i++;
}
echo "<br>";
$i = 1;
do {
    echo $i . ", ";
    $i++;
}while($i <= 10);
echo "<br>";
for($i = 1; $i <= 10; $i++) {
    echo $i . ", ";    
}
echo "<br>";
---------------------------------------------
$first = rand(1, 300);
$last = rand(1, 300);
if($first > $last) {
    $temp = $first;
    $first = $last;
    $last = $temp;
}
for($i = $first; $i <= $last; $i++) {
   echo $i . ", " ;
}
echo "<br>";
---------------------------------------------
// Arrays: 
$arr1 = array(10, 20, 30, "Hi");
for($i = 0; $i < count($arr1); $i++) {
    echo $arr1[$i] . ", ";
}
echo "<br>";
$arr2 = [10, 20, 30, "Hi"];
for($i = 0; $i < count($arr2); $i++) {
    echo $arr2[$i] . ", ";
}
echo "<br>";
for($i = 0; $i < 10; $i++) {
    $arr3[] = $i * $i; // push.
}
for($i = 0; $i < count($arr3); $i++) {
    echo $arr3[$i] . ", ";
}
echo "<br>";
for($i = 0; $i < 100; $i++) {
    $randomNumbers[] = rand(1, 1000);
}
for($i = 0; $i < count($randomNumbers); $i++) {
    echo $randomNumbers[$i] . ", ";
}
$sum = 0;
for($i = 0; $i < count($randomNumbers); $i++) {
    $sum += $randomNumbers[$i];
}
echo "Average: " . ($sum / count($randomNumbers)) . "<br>";
---------------------------------------------

// Samples:  
function getSum($arr) {
    $sum = 0;
    foreach($arr as $value) {
        $sum += $value;
    }
    return $sum;
}
function getAvg($arr) {
    return getSum($arr) / count($arr);
}
---------------------------------------------


// Associative Array: 
$colorItems = ["sky" => "blue", "sun" => "yellow", "grass" => "green"];
echo "sky is " . $colorItems["sky"] . "<br>";
echo "sun is " . $colorItems["sun"] . "<br>";
echo "grass is " . $colorItems["grass"] . "<br>";
// foreach: 
foreach($arr1 as $value) {
    echo $value . ", ";
}
echo "<br>";
foreach($colorItems as $key => $value) {
    echo "Key: " . $key . ", Value: " . $value . ", ";
}
echo "<br>";
---------------------------------------------
// Functions: 
function sayHi() {
    echo "Hi<br>";
}
sayHi();
function getAverage($a = 1, $b = 2, $c = 3) {
    $avg = ($a + $b + $c) / 3;
    return $avg;
}
$avg = getAverage(10, 200, 3000);
echo "Average: " . $avg . "<br>";
$avg = getAverage();
echo "Average: " . $avg . "<br>";
---------------------------------------------
// include './math2.php';
// include_once './math.php';
// require "./math.php";
require_once './math.php';
$result = add(10, 20);
echo "Result: " . $result . "<br>";
---------------------------------------------
require_once './arrayOperations.php';
$sum = getSum([12,23,34,45,56,67]);
$avg = getAvg([12,23,34,45,56,67]);
echo "Sum: $sum, Avg: $avg<br>";
---------------------------------------------
// Literal Object: 
$cat = new stdClass();
$cat->name = "Mitsi";
$cat->age = 4;
$cat->color = "White";
---------------------------------------------
echo "Name: " . $cat->name . ", Age: " . $cat->age . ", Color: " . $cat->color . "<br>";
echo "Name: $cat->name, Age: $cat->age, Color: $cat->color<br>";

2.  primes: function getPrimes($count) {
    $primes = [];
    for($i = 1; $i <= $count; $i++) {
        if(isPrime($i)) {
            $primes[] = $i;
        }
    }
    return $primes;
}
function isPrime($n) {
    $n = abs($n);
    if($n == 1) {
        return false;
    }
    $sqrt = sqrt($n);
    for($i = 2; $i <= $sqrt; $i++) {
        if($n % $i == 0) {
            return false;
        }
    }
    return true;
}

2. 5. index for primes: require_once './primes.php';
$primes = getPrimes(1000);
for($i = 0; $i < count($primes); $i++) {
    echo $primes[$i] . ", ";
}  

3. OOP -> basic Class: abstract class Cat {
    public $name = "---";
    private $age = 0;
    public static $fileName = "cats.txt";
    private static $counter = 0;
    const numOfLegs = 4;
    public function __construct($name, $age) {
        $this->name = $name;
        $this->setAge($age);
        Cat::$counter++;
    }
    public static function getCounter() {
        return Cat::$counter;
    }
    public function getAge() {
        return $this->age;
    }
    public function setAge($value) {
        if($value >= 0 && $value <= 30) {
            $this->age = $value;
        }
    }
    public function show() {
        echo "Name: $this->name, Age: $this->age";
    }
    public static function displayFileName() {
        echo "File Name: " . Cat::$fileName . "<br>";
        echo "File Name: " . self::$fileName . "<br>";
        echo "File Name: " . static::$fileName . "<br>";
    }
    public abstract function makeSound();
}

4. OOP -> inheritance class: require_once './Cat.php';
class HomeCat extends Cat {
    public $food;
    public function __construct($name, $age, $food) {
        parent::__construct($name, $age); // super
        $this->food = $food;
    }
    public function show() {
        parent::show();
        echo ", Food: $this->food<br>";
    }   
    public function makeSound() {
        echo "Meow<br>";
    }
}

5. OOP -> polymorphed Class: 
require_once './Cat.php';
require_once './Tester.php';
class WildCat extends Cat implements Tester {
    public $color;
    public function __construct($name, $age, $color) {
        parent::__construct($name, $age); // super
        $this->color = $color;
    }
    public function show() {
        parent::show();
        echo ", Color: $this->color<br>";
    }
    public function makeSound() {
        echo "Meeeoooooo!<br>";
    }
    public function test() {
        echo "Testing this Whild Cat...<br>";
    }
}

6. one index to bind them all: require_once './WildCat.php';
require_once './HomeCat.php';
require_once './Tester.php';
$allCats[] = new WildCat("Mitsi", 4, "White");
$allCats[] = new HomeCat("Kitsi", 5, "Mice");
$allCats[] = new WildCat("Pitsi", 6, "Black");
$allCats[] = new HomeCat("Litsi", 7, "Ketly");
foreach($allCats as $cat) {
    $cat->show();
    $cat->makeSound();
    if($cat instanceof Tester) {
        $cat->test();
    }
    echo "<hr>";
}

7. interface (tester.php) -> interface Tester {
    function test();
}
