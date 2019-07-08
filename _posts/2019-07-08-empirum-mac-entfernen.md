---
layout: post
title: Empirum auf dem Mac entfernen / deinstallieren
lang: de
---
Auf meinem Arbeitsrechner (ein MacBook Pro) läuft der Empirum Agent, eine Software von Matrix24. Sie ermöglich es unseren IT Administratoren viel zu automatisieren: Betriebssysteme und Software installieren, Ausstattung inventarisieren oder regelmäßig Softwareaktualisierungen durchführen.

Leider habe ich auch den Eindruck, dass mein Mac deswegen sehr heiß wird. Mit folgeden Shell Kommandos kannst du Empirum in die ewigen Jagdgründe der ungeliebten Software schicken ☠️.

Dafür benötigst Du allerdings `sudo`-Rechte auf deinem Rechner.

```
sudo launchctl unload /Library/LaunchAgents/com.Matrix42.GUIAgent.plist
sudo rm -f /Library/LaunchAgents/com.Matrix42.GUIAgent.plist
sudo launchctl unload /Library/LaunchDaemons/com.Matrix42.EmpirumD.plist
sudo rm -f /Library/LaunchDaemons/com.Matrix42.EmpirumD.plist
sudo rm -fR /Library/Application\ Support/matrix42/Empirum
sudo rm –fR /Library/Caches/EmpirumAgent
sudo rm -fR /Library/Application\ Support/matrix42/EmpirumAgent
```

👋 Ciao Empirum, ich werde dich nicht vermissen.
