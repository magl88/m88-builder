<?php if( have_rows('slides') ): ?>
<div class="owl-1 owl-carousel" id="owl-1">
  <?php while( have_rows('slides') ): the_row(); 
    $row = get_row();
    if( $row['image'] ):
  ?>
  <div class="owl-item-<?php echo $x?>">
    <img src="<?php echo $row['image']; ?>" />
    <?php echo $row['text']; ?>
  </div>
  <?php endif; ?>
  <?php endwhile; ?>
</div>
<?php endif; ?>