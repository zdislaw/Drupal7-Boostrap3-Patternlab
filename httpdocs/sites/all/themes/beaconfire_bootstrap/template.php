<?php

/**
 * @file
 * template.php
 */

function beaconfire_bootstrap_preprocess_page(&$variables){
	//print "<pre>".print_r($variables,true)."</pre>";
	// Remove container class from navbar classes
	beaconfire_bootstrap_remove_container_class($variables['navbar_classes_array']);

	// If user has access to admin menu add class to body
	if(user_access("access administration menu"))
		$variables['classes_array'][] = "admin-menu";
}

function beaconfire_bootstrap_remove_container_class(&$classes){
	if(($key = array_search("container", $classes)) !== false)
    unset($classes[$key]);
}