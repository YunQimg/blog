#!/bin/bash  

disk=/dev/sdb
mkdir -p /data

# Use curly braces when referencing variables
echo ${disk}
parted -s ${disk} mklabel gpt
parted -s ${disk} mkpart xfs 0% 100%
sleep 1

# Notice that it's sdb1.
mkfs.xfs  -f  ${disk}1

# Notice that it's sdb1.
mount_cmd="${disk}1        /data    xfs    defaults        0    0" 
echo ${mount_cmd} >>  /etc/fstab

# Mount all mountable disks
mount -a
df -hT

# 原文链接：https://blog.csdn.net/Man_In_The_Night/article/details/86575198
