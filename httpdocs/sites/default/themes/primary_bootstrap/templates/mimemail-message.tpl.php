<?php

/**
 * @file
 * Default theme implementation to format an HTML mail.
 *
 * Copy this file in your default theme folder to create a custom themed mail.
 * Rename it to mimemail-message--[module]--[key].tpl.php to override it for a
 * specific mail.
 *
 * Available variables:
 * - $recipient: The recipient of the message
 * - $subject: The message subject
 * - $body: The message body
 * - $css: Internal style sheets
 * - $module: The sending module
 * - $key: The message identifier
 *
 * @see template_preprocess_mimemail_message()
 */
?>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

    <?php if ($css): ?>
      <style type="text/css">
        <!--
        <?php print $css ?>
        -->
      </style>
    <?php endif; ?>
  </head>
  <body id="mimemail-body" <?php if ($module && $key): print 'class="'. $module .'-'. $key .'"'; endif; ?>>
    <table border="0" cellpadding="0" cellspacing="0" height="100%" width="100%" id="bodyTable">
      <tr>
        <td align="center" valign="top">
          <table id="center" style="width: 600px;margin: 1em auto;" width="600">
            <tr>
              <td align="center">
                <?php $logoURL = $GLOBALS['base_url']."/".drupal_get_path("theme","primary_bootstrap")."/img/logo.png"; ?>
                <img id="logo" alt="<?php variable_get('site_name'); ?>" src="<?php print $logoURL; ?>">
              </td>
            </tr>
            <tr>
              <td id="main" style="padding:20px 0;">
                <?php print $body ?>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>

