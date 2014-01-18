## Jadami - Site for Jadamci

### Install Node.js

To check if you have Node installed, type:

`node -v`

If it's missing, install it:

```bash
mkdir ~/programs
cd ~/programs
wget http://nodejs.org/dist/v0.10.24/node-v0.10.24.tar.gz
tar -zxvf node-v0.10.24-linux-x64.tar.gz
```

```bash
# IMPORTANT: replace <USERNAME> with your username
sudo ln -s /home/<USERNAME>/programs/node-v0.10.24-linux-x64/bin/node /usr/local/bin/node
sudo ln -s /home/<USERNAME>/programs/node-v0.10.24-linux-x64/bin/npm /usr/local/bin/npm
```

Now `node -v` should print `v0.10.24`

### Clone and install the project

```bash
git clone https://github.com/whoeverest/jadami.git
cd jadami
npm install
```

### Start the server

`node server.js`
