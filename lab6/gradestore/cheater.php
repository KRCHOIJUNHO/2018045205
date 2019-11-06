<!DOCTYPE html>
<html lang="en">
	<head>
		<title>Grade Store</title>
		<link href="https://selab.hanyang.ac.kr/courses/cse326/2019/labs/labResources/gradestore.css" type="text/css" rel="stylesheet" />
	</head>

	<body>
		
		<?php
            $name = $_POST["name"];
            $id = $_POST["id"];
            $course = processCheckbox($_POST["course"]);
            $grade = $_POST["grade"];
            $creditcard = $_POST["creditcard"];
            $CreditCard = $_POST["CreditCard"];
            
            if(!isset($name) || !isset($id) || !isset($course) || !isset($grade) || !isset($creditcard) || !isset($CreditCard) || empty($name) || empty($id) || empty($course) || empty($grade) || empty($creditcard) || empty($CreditCard)){
                
		?>

        <h1>Sorry</h1>
        <p>You didn't fill out the form completely. <a href="gradestore.html">Try again?</a></p>
        
		<?php
		# Ex 5 : 
		# Check if the name is composed of alphabets, dash(-), ora single white space.
            } elseif (!preg_match("/^([a-zA-Z0-9]+[\s\-]?)+[a-zA-Z]$/", $name)) { 
		?>

 
			
        <h1>Sorry</h1>
        <p>You didn't provide a valid name. <a href="gradestore.html">Try again?</a></p>

		<?php
		# Ex 5 : 
		# Check if the credit card number is composed of exactly 16 digits.
		# Check if the Visa card starts with 4 and MasterCard starts with 5. 
            } elseif (($CreditCard=='visa' && preg_match("/[^4][0-9]{15}/",$creditcard)) || ($CreditCard=='mastercard' && preg_match("/[^5][0-9]{15}/",$creditcard)))  {
		?>

		
        <h1>Sorry</h1>
        <p>You didn't provide a valid credit card number. <a href="gradestore.html">Try again?</a></p>
		 

		<?php
        } else {
		?>

		<h1>Thanks, looser!</h1>
		<p>Your information has been recorded.</p>
		
		<ul> 
			<li>Name: <?= $name ?></li>
			<li>ID: <?= $id ?></li>
			<li>Course: <?= $course ?></li>
			<li>Grade: <?= $grade ?></li>
			<li>Credit <?= "$creditcard ($CreditCard)" ?></li>
		</ul>
		
        <p>Here are all the loosers who have submitted here:</p>
        
		<?php
			$filename = "loosers.txt";
            $new_text = "$name;$id;$creditcard;$CreditCard\n";    
            file_put_contents($filename, $new_text, FILE_APPEND);
		?>
		
		<?php $file_contents = file_get_contents($filename); ?>
    
        <pre><?= $file_contents ?></pre>
        
        <?php } ?>
		
		<?php
			function processCheckbox($names){
                $courses = implode(", ", $names);
                return $courses;
            }
		?>
		
	</body>
</html>
