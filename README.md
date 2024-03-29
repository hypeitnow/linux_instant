# linux_instant

Repo containing instant linux scripts

# Desktop environments

***GNOME***
You should remember about the kitty.conf file which contains the super+v mapping for pasting from clipboard, in gnome notification center should be changed to super+b  

# Updates

To update vsc run every day.

```bash
paru|yay] -S code-insiders --rebuild --redownload --cleanafter
```

# Minikube

To install minikube stack run

```bash
yay -Syu podman kubectl helm minikube aardvark-dns
minikube start \
--force-systemd \
--container-runtime containerd \
--kubernetes-version latest \
--cni flannel \
--nodes 2 \
--addons="csi-hostpath-driver,dashboard,default-storageclass,helm-tiller,ingress,ingress-dns,metallb,metrics-server,portainer,storage-provisioner,volumesnapshots"

```

# GIT

```bash
git config --global credential.helper /usr/lib/git-core/git-credential-libsecret
```

# Yay do not confirm every time

To avoid the second and third prompts, you can set the config options to give defaults and never prompt. See the current config with yay -Yg (<https://github.com/Jguer/yay/blob/master/doc/yay.8#L105>)

You can set answers with yay --save --answerX: <https://github.com/Jguer/yay/blob/master/doc/yay.8#L225-L246>
for example: yay --save --answerclean All --answerdiff All

and set the menu display options similarly: <https://github.com/Jguer/yay/blob/master/doc/yay.8#L265-L311>
for example: yay --save --nocleanmenu --nodiffmenu

I'll leave the rest an an exercise to the reader. Remember, man is your friend!

# Archived and No longer maintained

Due to the constant updates and time it takes to maintain this script I will no longer be updating it. Free free to fork it and take what you want from here. There has been some fantastic contributions over the past year and I learned a lot while making this project.

Thank you!

# Configure sddm autologin

Have a look at <https://bbs.archlinux.org/viewtopic.php?pid=2099725#p2099725>

# ArchTitus Installer Script

[![GitHub Super-Linter](https://github.com/ChrisTitusTech/ArchTitus/workflows/Lint%20Code%20Base/badge.svg)](https://github.com/marketplace/actions/super-linter)

<img src="https://i.imgur.com/YiNMnan.png" />

This README contains the steps I do to install and configure a fully-functional Arch Linux installation containing a desktop environment, all the support packages (network, bluetooth, audio, printers, etc.), along with all my preferred applications and utilities. The shell scripts in this repo allow the entire process to be automated.)

---

## Create Arch ISO or Use Image

Download ArchISO from <https://archlinux.org/download/> and put on a USB drive with [Etcher](https://www.balena.io/etcher/), [Ventoy](https://www.ventoy.net/en/index.html), or [Rufus](https://rufus.ie/en/)

If you don't want to build using this script I did create an image @ <https://cttstore.com/arch-titus>

## Boot Arch ISO

From initial Prompt type the following commands:

```
pacman -Sy git
git clone https://github.com/ChrisTitusTech/ArchTitus
cd ArchTitus
./archtitus.sh
```

### System Description

This is completely automated arch install. It includes prompts to select your desired desktop environment, window manager, AUR helper, and whether to do a full or minimal install. The KDE desktop environment on arch includes all the packages I use on a daily basis, as well as some customizations.

## Troubleshooting

**[Arch Linux RickEllis Installation Guide](https://github.com/rickellis/Arch-Linux-Install-Guide)**

**[Arch Linux Wiki Installation Guide](https://wiki.archlinux.org/title/Installation_guide)**

The main script will generate .log files for every script that is run as part of the installation process. These log files contain the terminal output so you can review any warnings or errors that occurred during installation and aid in troubleshooting.

### No Wifi

You can check if the WiFi is blocked by running `rfkill list`.
If it says **Soft blocked: yes**, then run `rfkill unblock wifi`

After unblocking the WiFi, you can connect to it. Go through these 5 steps:

# 1: Run `iwctl`

# 2: Run `device list`, and find your device name.

# 3: Run `station [device name] scan`

# 4: Run `station [device name] get-networks`

# 5: Find your network, and run `station [device name] connect [network name]`, enter your password and run `exit`. You can test if you have internet connection by running `ping google.com`, and then Press Ctrl and C to stop the ping test.

## Reporting Issues

An issue is easier to resolve if it contains a few important pieces of information.

1. Chosen configuration from /configs/setup.conf (DONT INCLUDE PASSWORDS)
1. Errors seen in .log files
1. What commit/branch you used
1. Where you were installing (VMWare, Virtualbox, Virt-Manager, Baremetal, etc)
    1. If a VM, what was the configuration used.

## Credits

- Original packages script was a post install cleanup script called ArchMatic located here: <https://github.com/rickellis/ArchMatic>
- Thank you to all the folks that helped during the creation from YouTube Chat! Here are all those Livestreams showing the creation: <https://www.youtube.com/watch?v=IkMCtkDIhe8&list=PLc7fktTRMBowNaBTsDHlL6X3P3ViX3tYg>
