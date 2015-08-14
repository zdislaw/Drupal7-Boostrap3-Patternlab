(function($){
	BF.user = {
		roles : [],
		hasRole : function(role){
			if(BF.user.roles.indexOf("administrator") >= 0 || BF.user.roles.indexOf(role) >= 0)
				return true;
			return false;
		}
	};

	BF.init(function(){
		if(Drupal.settings.iamerica_admin){
			var rolesObject = Drupal.settings.iamerica_admin.user.roles;
			for(var i in rolesObject){
				if(rolesObject.hasOwnProperty(i))
					BF.user.roles.push(rolesObject[i]);
			}
		}
	});
})(jQuery);