{ pkgs, inputs, ... }:

let
  wrangler = inputs.nix-wrangler.packages.${pkgs.stdenv.system}.wrangler;
in
{
  # https://devenv.sh/packages/
  # packages = [ wrangler ];

  enterShell = ''
    echo "Welcome to (devs)Hell
  '';

  # https://devenv.sh/scripts/
  scripts.run-website-2.exec = "npm run dev";


  # https://devenv.sh/languages/
  languages.javascript.enable = true;
  languages.javascript.npm.enable = true;
  languages.javascript.npm.install.enable = true;
  languages.typescript.enable = true;


  # https://devenv.sh/pre-commit-hooks/
  # pre-commit.hooks.shellcheck.enable = true;

  # https://devenv.sh/processes/
  # processes.ping.exec = "ping example.com";

  # See full reference at https://devenv.sh/reference/options/
}
