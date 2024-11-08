<?php
add_action('wp_head', 'm88_add_meta', 0);
function m88_add_meta()
{
	echo '
		<meta charset="' . bloginfo('charset') . '">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="profile" href="http://gmpg.org/xfn/11">
	';
}
