<?php

/**
 * @file
 * template.php
 */

/**
 * Preprocess variables for the html template.
 */
function primary_bootstrap_preprocess_html(&$vars) {
  
  drupal_add_css('sites/all/themes/beaconfire_bootstrap/css/styles.css');

} // END primary_bootstrap_preprocess_html()
