<?php
function var_dump_pre($mixed = null) {
	if ($mixed != null) {
		  echo '<pre>';
			var_dump($mixed);
			echo '</pre>';
			return null;
	} else {
		echo 'Set dump data!';
	}
}

add_action('vdp', 'var_dump_pre', 10, 3);

// do_action('vdp', $item['icon']);
