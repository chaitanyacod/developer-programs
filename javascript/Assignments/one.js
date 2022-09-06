<html>
    <head>

    </head>
    <body>
    <script>

// js Program to check whether
// a number is divisible by 7

// Function to check whether a
// number is divisible by 7
function isDivisibleBy7( num )
{
	
	// If number is negative,
	// make it positive
	if( num < 0 )
		return isDivisibleBy7( -num );

	// Base cases
	if( num == 0 || num == 7 )
		return 1;
	if( num < 10 )
		return 0;

	// Recur for ( num / 10 - 2 * num % 10 )
	return isDivisibleBy7(num / 10 - 2 *
						(num - num / 10 * 10 ) );
}

	// Driver Code
	let num = 616;
	if( isDivisibleBy7(num )>=0 )
		document.write("Divisible");
	else
		document.write("Not Divisible");

// This code is contributed by sravan kumar

</script>

    </body>
</html>