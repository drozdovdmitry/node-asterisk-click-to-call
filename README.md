# Nodejs Aterisk click-to-call

Install nodejs (tested on Ubuntu 18.04)
```
sudo apt-get install curl -y &&
sudo curl -sL https://deb.nodesource.com/setup_14.x | bash - &&
sudo apt-get install -y nodejs &&
sudo apt install npm -y &&
sudo npm install pm2 -g &&
sudo apt-get install git -y
```

Install service
```
sudo git clone https://github.com/drozdovdmitry/node-asterisk-click-to-call.git && 
cd node-asterisk-click-to-call &&
sudo npm install
```

Next steps (for FreePBX gui)
- In FreePBX admin panel go to Settings -> Asterisk Manager Users
- Add AMI user and get permissions
- Add AMI host, post, user, password to config.json
- Edit server token
- Edit type (i am usind "PJSIP" or "SIP")
- Edit context (i am usind "from-internal" or "default")


Start service
```
sudo npm start
```

Stop service
```
sudo npm stop
```

Service logs
```
sudo pm2 logs
```

Testing (curl):
- Add server token
- Add server ip and port (default 7000)
- Add numberA - your internal phone
- Add numberB - your external phone

```
curl --location --request POST 'http://ip:7000/' \
--header 'token: token' \
--header 'Content-Type: application/json' \
--data-raw '{
    "numberA": 999,
    "numberB": 9999999999
}'
```
