#!/usr/bin/env bash
# refractainstaller-wrapper.sh 9.0.9
#
# Start Refracta Installer using Yad in preference to Zenity. 
# If neither yad nor zenity is installed, give a warning message.


if [[ -f /usr/bin/yad ]]; then
	yadversion=$(yad --version | cut -d. -f2)
	if (( $yadversion >= 17 )); then
		#gksu /usr/bin/refractainstaller-yad &
		gksu 'x-terminal-emulator -e /usr/bin/refractainstaller-yad' &
	fi
elif
	[[ -f /usr/bin/zenity ]]; then
		#gksu /usr/bin/refractainstaller-gui &
		gksu 'x-terminal-emulator -e /usr/bin/refractainstaller-gui' &
else
	xterm -hold -fa monaco -fs 14 -geometry 80x20+0+0 -e echo "
  Neither Yad nor Zenity is installed, or the version of Yad is too old.
  You can't run the GUI version of Refracta Installer without one of 
  those. Instead, you can run 'refractainstaller' from a terminal 
  or console for the CLI version.
  " &
fi

exit 0
