Beaconfire Drupal 7 Readme

Environments
----------

* **Template VM:**			vm-drupal-template

* **Dev:**              http://drupal7_starter_dev.beaconfire.us
* **Dev Admin:**        http://drupal7_starter_dev.beaconfire.us/user
* **Dev eZ Code Path:   /var/www/drupal/httpdocs
* **Staging:**          n/a
* **Staging Admin:**    n/a
* **Prod Server:**      bfire@###.###.###.###
* **Prod EZ:**          http://XYZ.members.linode.com
* **Prod Admin:**       http://
* **Prod eZ Code Path:  /data/www/drupal/httpdocs


Drush
----------
Drush is a command line tool used to manage Drupal. It is highly recommended
that you use it instead of the GUI to do things like enable modules and flush the cache.

Some frequently used commands: 
- Flush the Cache: drush cc all 
- Flush a specific cache (a menu will be shown): drush cc
- Enable|Disable a module by machine name: drush [en|dis] module_name 
- Search for a module: drush pml | grep "[keyword]"

 
Compass Watch
----------
Not using compass on this site, see Grunt...

 
Grunt
-----
Grunt is used on this site to compile CSS and JS. Check out Gruntfile.js in this directory to see what it does.
To run Grunt...

on a Vagrant box, after Vagrant is up, and in same command window:
1. vagrant ssh
2. cd /vagrant
3. grunt [or] grunt watch

anywhere else:
1. ssh bfire@lsc.beaconfire.us
2. cd /var/www/drupal
3. grunt [or] grunt watch


Deployment
----------

Deployment is done via git with the following steps:
1. ssh bfire@CLIENT_ALIAS.beaconfire.us
2. cd to /var/www/drupal
3. use git to push to vm-repos first (the default for git push): git push
4. use git to push to prod: git push CLIENT_ALIAS-prod
5. ssh bfire@prod
6. cd to /data/www/drupal
7. use git to update the live site: git pull
8. refresh the cache via the admin or command line (drush cc all) and verify changes on site

