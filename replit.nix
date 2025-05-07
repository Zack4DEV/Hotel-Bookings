{ pkgs }: {
	 channel = "unstable";


   home.packages = [
			pkgs.nano
			pkgs.gh
			pkgs.sudo

   ];

	deps = [
   pkgs.gh
			pkgs.nodejs
	];
	
	 idx = {
		extensions = [];
		 previews = {
			  web = {
			    command = ["npm run dev && php artisan serve"];
			    manager = "web";
			    env = {
			      PORT = "$PORT";
			    };
			  };
		 };
		workspace = {
			onCreate = {
				create-venv = ''
					npm ci --production
				'';
				# Open editors for the following files by default, if they exist:
				default.openFiles = [ "README.md" ];
			};
			 onStart = {
				# Example: start a background task to watch and re-build backend code
				 watch-backend = "npm run dev && php artisan serve";
			};
		};
	};
}