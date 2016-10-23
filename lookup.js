var lookup ={
"0"  : (message) => {
func1( message )
}
}

var func1 = function (message)
{
console.log("message to log ", message )
}

function logit(key, message)
{
	lookup[key](message)
}

logit("0", "Ji John")
