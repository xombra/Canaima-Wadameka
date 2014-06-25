#!/usr/bin/env bash
# cleanup-install.sh

# You can add other commands here that you want to run at the end of 
# the installation process, before script self-cleanup (while the
# installed system is still mounted.)
#
# Anything you add must come before the "exit 0"

# Send errors to the installer's error log.
error_log=$(grep error_log /etc/refractainstaller.conf | cut -d"\"" -f2)
exec 2>> "$error_log"

# This removes the installer icon from the desktop upon installation.
for file in /target/home/*/Desktop/refractainstaller.desktop ; do
	rm -f "$file"
done











exit 0
