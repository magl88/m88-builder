<?php
get_template_part('/inc/functions/clear');
get_template_part('/inc/functions/add-js');
get_template_part('/inc/functions/add-styles');
get_template_part('/inc/functions/replaces-query-version');
get_template_part('/inc/functions/add-menu');
get_template_part('/inc/functions/add-html5');
get_template_part('/inc/functions/add-favicon');
get_template_part('/inc/actions/index');

function get_posts_by_category() {
    // Отримуємо параметри з AJAX-запиту
    $category_id = $_POST['category_id'];
    $posts_per_page = $_POST['posts_per_page'];
    $offset = $_POST['offset'];

    // Ваша логіка для отримання постів з вказаної категорії
    // Використовуйте WP_Query або будь-який інший спосіб, який вам потрібен

    // Виводимо пости
    if ($your_query->have_posts()) {
        while ($your_query->have_posts()) {
            $your_query->the_post();
            // Відображаємо пости
            // Наприклад, ви можете використовувати the_title(), the_content(), тощо
        }
        wp_reset_postdata();
    } else {
        // Немає більше постів, якщо offset перевищує кількість доступних постів
    }

    die();
}

// Додаємо дію до WordPress для обробки AJAX-запиту
add_action('wp_ajax_get_posts_by_category', 'get_posts_by_category');
add_action('wp_ajax_nopriv_get_posts_by_category', 'get_posts_by_category');

?>