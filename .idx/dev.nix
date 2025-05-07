

# To learn more about how to use Nix to configure your environment
# see: https://developers.google.com/idx/guides/customize-idx-env
{ pkgs, ... }: {
  # Which nixpkgs channel to use.
  channel = "unstable";

  # Use https://search.nixos.org/packages to find packages
  packages = [
      pkgs.nodejs_23
      pkgs.yarn
      pkgs.typescript
      pkgs.php
      pkgs.php82Packages.composer
     # pkgs.vscode-extensions.ms-azuretools.vscode-docker
      pkgs.docker_27
      pkgs.docker-compose
     # pkgs.docker-engine

      pkgs.sudo
    #  pkgs.gh
    #  pkgs.git
  ];

  # Sets environment variables in the workspace
  env = {};
  idx = {
    # Search for the extensions you want on https://open-vsx.org/ and use "publisher.id"
    extensions = [];
    # Enable previews
      previews = {
        # web = {
        #   # Example: run "npm run dev && php artisan serve" with PORT set to IDX's defined port for previews,
        #   # and show it in IDX's web preview panel
        #   command = ["npm" "run" "dev" "&&" "php" "artisan" "serve"];
        #   manager = "web";
        #   env = {
        #     # Environment variables to set for your server
        #     PORT = "$PORT";
        #   };
        # };
      };

    # Workspace lifecycle hooks
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