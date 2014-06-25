#!/usr/bin/env bash
# loc-timezn.sh


# Send errors to the installer's error log.
error_log=$(grep error_log /etc/refractainstaller.conf | cut -d"\"" -f2)
exec 2>> "$error_log"


# This lets you choose time zone and locale (language) at the beginning
# of the installation process. Un-comment the keyboard-configuration
# if you want that to run, too.

if  [[ $DISPLAY ]] ; then
	dpkg-reconfigure -fgnome tzdata || dpkg-reconfigure tzdata
	dpkg-reconfigure -fgnome locales || dpkg-reconfigure locales
#	dpkg-reconfigure -fgnome tzdata || dpkg-reconfigure keyboard-configuration
else
	echo -e "\n\tSet time zone and locales.\n"
	sleep 2
	dpkg-reconfigure tzdata
	dpkg-reconfigure locales
#	dpkg-reconfigure keyboard-configuration
fi




exit 0
