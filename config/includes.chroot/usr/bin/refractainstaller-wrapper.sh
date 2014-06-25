#!/usr/bin/env bash
# refractainstaller-wrapper.sh 9.0.9

if ! [[ -d /lib/live/mount/rootfs ]] ; then
	exit 1
else
	echo 1 > /dev/null
fi

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
  Yad y Zenity no estan instalados, o la version de Yad es muy vieja.
  Puede usar 'refractainstaller' desde un terminal para instalar el
  sistema con la version CLI.
  " &
fi

exit 0
