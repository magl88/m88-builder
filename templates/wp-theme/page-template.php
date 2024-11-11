<?php
/* Template Name: Template */
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
	<?php wp_head(); ?>
</head>

<body <?php body_class("page-template"); ?>>
	<?php wp_body_open(); ?>
	<div class="wrapper">
		<?php get_header(); ?>
		<main class="main">

		<?php
		while ( have_posts() ) :
			the_post();
			get_template_part( 'template-parts/content', get_post_type() );
		endwhile; // End of the loop.
		?>
		</main>
		<?php get_footer(); ?>
	</div>
	<?php wp_footer(); ?>
</body>

</html>
