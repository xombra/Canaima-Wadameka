#!/usr/bin/env bash
#elaborado por sinfallas
history -c
service shorewall stop
service fail2ban stop
service psad stop
service clamav-freshclam stop
service i2p stop
service tor stop
service privoxy stop
service polipo stop
service cron stop
service anacron stop
service rsyslog stop
service avahi-daemon stop 
service ntp stop
service memlockd stop
tsocks -off
apt-get clean
rm -rf /home/*/.mozilla/firefox/*/*Cache*
rm -rf /tmp/*
rm -rf /var/tmp/*
rm -rf /var/cache/polipo/*
for FILE in $(find /var/log/ -type f)
do
	: > ${FILE}
done
exit 0
