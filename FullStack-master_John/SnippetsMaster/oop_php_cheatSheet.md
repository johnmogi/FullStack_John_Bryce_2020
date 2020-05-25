0. oop 101 : What are public, private and protected in object oriented programming?
They are access modifiers and help us implement Encapsulation (or information hiding). They tell the compiler which other classes should have access to the field or method being defined.
[private] - Only the current class will have access to the field or method.
[protected] - Only the current class and subclasses (and sometimes also same-package classes) of this class will have access to the field or method.
[public] - Any class can refer to the field or call the method.
This assumes these keywords are used as part of a field or method declaration within a class definition.

1. decalre Class:
class Obj {
    public $stringItem = "---"; 
    private $numberItem = 0; 
    private static $counter = 0; // init counter
public function __construct($stringItem, $numberItem) { 
        $this->stringItem = $stringItem;
        $this->numberItem = $numberItem;
        Obj::$counter++; // promote inner count by one.
}
    public static function getCounter() {
        return Obj::$counter;
    }
    public function getNumberItem() {
        return $this->numberItem;
    }
    public function setNumberItem($value) {
        if($value >0) {
            $this->numberItem = $value;
        }
    }
    public function show() {
        echo "_String: $this->stringItem,
        _Number: $this->numberItem,
        _Counter: " . $this->getCounter();
    }
}

2. toolkit:
echo "Counter: " . Cat::getCounter() . "<br>";
echo "The age is: " . $myCat->getAge() . "<br>";

3. inheritance : 
require_once './Obj.php';
class NewObj extends Obj {
    public $newAttribute;
    public function __construct($stringItem, $numberItem, $newAttribute) {
        parent::__construct($stringItem, $numberItem); // super
        $this->newAttribute = $newAttribute;
    }
    
    public function show() {
        parent::show();
        echo ", New Attribute: $this->newAttribute<br>";
    }   
    
}

4. cover both polymorphism + abstract class


