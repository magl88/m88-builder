<?php
function add_svg_tag($imgName)
{
	if ($imgName != '') {
		echo '<div class="svg svg-' . $imgName . '">';
		// echo file_get_contents( get_template_directory_uri() . '/assets/svg/' . $imgName . '.svg' );
		echo 'DDD';
		echo '</div>';
	} else {
		echo 'Set name image file!';
	}
}

add_action('add_svg', 'add_svg_tag', 10, 3);
