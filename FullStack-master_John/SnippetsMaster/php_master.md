1. linux folder location:
/srv/www/htdocs/
northwind: https://www.zentut.com/sql-tutorial/sql-sample-database/

2. index.php:
add form
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">

3. dal.php : <?php
function connect() {
    $connection = mysqli_connect("localhost", "root", "", "Northwind");
    if(mysqli_connect_errno($connection)) {
        $msg = "Error: " . mysqli_connect_error();
        die($msg);
    }
    return $connection;
}
function select($sql) {
    $connection = connect();
    $table = mysqli_query($connection, $sql);
    $row = mysqli_fetch_object($table);
    while($row) {
        $arr[] = $row;
        $row = mysqli_fetch_object($table);
    }
    mysqli_close($connection);
    return $arr;
}
function insert($sql) {
    $connection = connect();
    mysqli_query($connection, $sql);
    $id = mysqli_insert_id($connection);
    mysqli_close($connection);
    return $id;
}

4. demo-logic.php:  <?php
require_once './dal.php'; 
function getAllProducts() {
    $sql = "SELECT ProductID as id, ProductName as name, " . 
            "UnitPrice as price, UnitsInStock as stock " .
            "FROM Products";
    $products = select($sql);
    return $products;
}
function addProduct($name, $price, $stock) {
 $sql = "INSERT INTO Products(ProductName, UnitPrice, UnitsInStock) " .
          "VALUES('$name', $price, $stock)";
    $id = insert($sql);
    return $id;
}
function deleteProduct($id) {
    $sql = "DELETE FROM Products WHERE ProductID=$id";
    $affectedRows = delete($sql);
    return $affectedRows;
}

5. demo-controller.php: <?php
require_once './products-logic.php'; 
$command = $_REQUEST["command"]; 
switch($command) { 
case "getAllProducts":
        $products = getAllProducts();
        echo $products;
        break;
    case "addProduct":
        $name = $_POST["name"];
        $price = $_POST["price"];
        $stock = $_POST["stock"];
        $id = addProduct($name, $price, $stock);
        header("location: thanks.php");
        break;
    case "deleteProduct": 
        $id = $_POST["id"];
        $affectedRows = deleteProduct($id);
        header("location: thanks.php");
        break;   
}

6. thanks.php (lastCommands)    <?php
            session_start();
            
            if(isset($_SESSION["lastCommands"])) {
                $lastCommands = $_SESSION["lastCommands"];
                echo "Last Commands:<br>" . $lastCommands;
            }
        ?>

7. session (in controller) if(isset($_SESSION["lastCommands"])) {
    $lastCommands = $_SESSION["lastCommands"];
    $lastCommands .= "<br>" . $command;
}
else {
    $lastCommands = $command;
}
$_SESSION["lastCommands"] = $lastCommands;

8. tabs master (in prep for angular p):  <ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="products-tab" data-toggle="tab" href="#products" role="tab" 
    aria-controls="products" aria-selected="true">Products</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" 
    aria-controls="profile" aria-selected="false">Add A Product</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="messages-tab" data-toggle="tab" href="#messages" role="tab" 
    aria-controls="messages" aria-selected="false">Messages</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="settings-tab" data-toggle="tab" href="#settings" role="tab" 
    aria-controls="settings" aria-selected="false">Settings</a>
  </li>
</ul>
<div class="tab-content">
  <div class="tab-pane active" id="products" role="tabpanel" aria-labelledby="products-tab">
  </div>
  <div class="tab-pane" id="profile" role="tabpanel" aria-labelledby="profile-tab">
  <div class="bd-callout bd-callout-danger">
<h4 id="asynchronous-methods-and-transitions">Asynchronous methods and transitions</h4>
 <strong>transitioning component will be ignored</strong>.</p>
<p><a href="/docs/4.5/getting-started/javascript/">See our JavaScript documentation for more information</a>.</p>
</div>
  </div>
  <div class="tab-pane" id="messages" role="tabpanel" aria-labelledby="messages-tab">
    Be a nyan cat
  </div>
  <div class="tab-pane" id="settings" role="tabpanel" aria-labelledby="settings-tab">...</div>
</div>

<script>
$('#myTab a').on('click', function (e) {
  e.preventDefault()
  $(this).tab('show')
})
  $(function () {
    $('#myTab li:last-child a').tab('show')
  })
</script>

9. table (products from db): <table class="table table-hover table-striped">
  <thead class="thead-dark">
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                <!-- Template Engine: -->
                <?php
                    require_once './products-logic.php';
                    $products = getAllProducts();
                    foreach($products as $p) {
                        // print_r($p);
                    echo "<tr>" . 
                            "<td>" .
                                "<a href='details.php?id=$p->id'>$p->name</a>" .
                            "</td>" .
                            "<td>$p->price</td>" .
                            "<td>$p->stock</td>" .
                            "<td>" .
                                "<button onclick='navigateToEdit($p->id)'>Edit</button>" .
                            "</td>" .
                            "<td>" .
                                "<button onclick='navigateToDelete($p->id,\"$p->name\")'>Delete</button>" .
                            "</td>" .
                         "</tr>";
                    }
                ?>
            </tbody>
        </table>

10. insert form:         <section>
            <h1>Add Product: </h1>
            <form action="products-controller.php" method="post">
                <input type="text" placeholder="Name..." name="name">
                <br><br>
                <input type="number" step="0.01" placeholder="Price..." name="price">
                <br><br>
                <input type="number" placeholder="Stock..." name="stock">
                <br><br>
                <input type="hidden" name="command" value="addProduct">
                <button>Add Product</button>
            </form>
        </section>

11. index.js (edit + delete + jquery) : function navigateToEdit(id) {
    location = "edit.php?id=" + id;
}
function navigateToDelete(id, name) {
    const answer = confirm("Are you sure you want to delete " + name + "?");
    if(!answer) {
        return;
    }
    $.ajax({
        method: "POST",
        url: "products-controller.php",
        data: `id=${id}&command=deleteProduct`,
        error: err => alert(err.message),
        success: result => {
            alert("Done");
            location = "index.php";
        }
    });
}

12. updated index header : 
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">     <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script> 
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script> 
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script> 
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="index.js"></script>

13. details.php <?php
            require_once './products-logic.php';
            $id = $_GET["id"];
            $p = getOneProduct($id);
            echo "<h3>Name: $p->name</h3>";
            echo "<h3>Price: $p->price</h3>";
            echo "<h3>Stock: $p->stock</h3>";
        ?>
        <br>
        <a href="index.php">Back to List</a>

14. update product:(ctrl:) function updateProduct($id, $name, $price, $stock) {
    $sql = "UPDATE Products SET " . 
            "ProductName='$name', UnitPrice=$price, " .
            "UnitsInStock=$stock WHERE ProductID=$id";
    $affectedRows = update($sql);
    return $affectedRows;
}(logic:)
case "updateProduct":
        $id = $_POST["id"];
        $name = $_POST["name"];
        $price = $_POST["price"];
        $stock = $_POST["stock"];
        $affectedRows = updateProduct($id, $name, $price, $stock);
        header("location: thanks.php");
        break;
        (copy thanks into edit.php:) <?php
    require_once './products-logic.php';
    $id = $_GET["id"];
    $p = getOneProduct($id);
?><div class="card">
        <h1>Edit Product: </h1>
        <form action="products-controller.php" method="post">
            <input type="hidden" name="id" value="<?php echo $p->id; ?>">
            <br><br>
            <input type="text" placeholder="Name..." name="name" value="<?php echo $p->name; ?>">
            <br><br>
            <input type="number" step="0.0001" placeholder="Price..." name="price" value="<?php echo $p->price; ?>">
            <br><br>
            <input type="number" placeholder="Stock..." name="stock" value="<?php echo $p->stock; ?>">
            <br><br>
            <input type="hidden" name="command" value="updateProduct">
            <button>Update Product</button>
        </form>
</div>

15.  