#!/usr/bin/env bash
# cleanup-install.sh
error_log=$(grep error_log /etc/refractainstaller.conf | cut -d"\"" -f2)
exec 2>> "$error_log"
rm -f /target/home/*/Escritorio/instalar-xanadu.desktop
exit 0
