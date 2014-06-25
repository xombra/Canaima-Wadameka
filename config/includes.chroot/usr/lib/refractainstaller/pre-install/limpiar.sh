#!/usr/bin/env bash
#elaborado por sinfallas
history -c
systemctl stop avahi-daemon
systemctl stop clamav-freshclam
systemctl stop fail2ban
systemctl stop i2p
systemctl stop memlockd
systemctl stop ntp
systemctl stop onioncat
systemctl stop polipo
systemctl stop privoxy
systemctl stop psad
systemctl stop shorewall
systemctl stop ssh
systemctl stop tor
service anacron stop
service cron stop
service rsyslog stop
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
