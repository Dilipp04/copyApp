const express = require("express");
const app = express();
const PORT = 3000;
app.use(express.json());

let data = {
  0: ``,
  1: `
  // topology
  DEVICE INTERFACE IP ADDRESS SUBNET MASK
DEFAULT
GATEWAY
R1 Gig0/0 192.168.1.1 255.255.255.0 -
S0/1/0 10.1.1.1 255.255.255.252 -
R2 S0/1/0 10.1.1.2 255.255.255.252 -
S0/1/1 10.2.2.2 255.255.255.252 -
R3 S0/1/0 10.2.2.1 255.255.255.252 -
Gig0/0 192.168.3.1 255.255.255.0 -
SERVER-0 - 192.168.1.5 255.255.255.0 192.168.1.1
SERVER-1 - 192.168.1.6 255.255.255.0 192.168.1.1
PC-PT - 192.168.3.5 255.255.255.0 192.168.1.3

Step 1:Connections
1/A  Step2: OSPF
Router  cli config      
Router 1:
Router(config)#router ospf 1    
Router(config-router)#network 192.168.1.0 0.0.0.255 area 0
Router(config-router)#network 10.1.1.0 0.0.0.3 area 0
Router(config-router)#area 0 authentication message-digest          exit
Router(config-if)#interface Serial0/1/0
Router(config-if)#ip ospf message-digest-key 1 md5 MD5pa55     
Router 2:
Router(config)#router ospf 2
Router(config-router)#network 10.1.1.0 0.0.0.3 area 0
Router(config-router)#network 10.2.2.0 0.0.0.3 area 0
Router(config-router)#area 0 authentication message-digest
Router(config-if)#interface Serial0/1/0
Router(config-if)#ip ospf message-digest-key 1 md5 MD5pa55
Router(config-if)#interface Serial0/1/0
Router(config-if)#ip ospf message-digest-key 1 md5 MD5pa55
Router 3:
Router(config)#router ospf 3
Router(config-router)#network 192.168.3.0 0.0.0.255 area 0
Router(config-router)#network 10.2.2.0 0.0.0.3 area 0
Router(config-router)#area 0 authentication message-digest
Router(config-if)#interface Serial0/1/0
Router(config-if)#ip ospf message-digest-key 1 md5 MD5pa55
Check:  Router# show ip ospf interface


Server 1service NTPon give key1 and password NTPpa55
Router(config)#ntp server 192.168.1.5
Router(config)#ntp update-calendar
Router(config)#ntp authenticate
Router(config)#ntp trusted-key 1
Router(config)#ntp authentication-key 1 md5 NTPpa55
Router(config)#service timestamps log datetime msec
(Same for all three router)

1/C  SYSlog
R1(config)# logging host 192.168.1.6
Same in all three and then exit
Server2servicesyslogdata will appear
1/D   SSH
R2(config)#ip domain-name ccnasecurity.com
R2(config)#username SSHadmin privilege 15 secret ciscosshpa55
R2(config)#line vty 0 4
R2(config-line)# login local
R2(config-line)# transport input ssh
R2(config)#crypto key zeroize rsa
R2(config)#crypto key generate rsa
How many bits in the modulus [512]: 1024
R2(config)#ex
R2#show ip ssh
R2#conf t
R2(config)#ip ssh time-out 90
R2(config)#ip ssh authentication-retries 2
R2(config)#ip ssh version 2
Check:
PC> ssh –1 SSHadmin 192.168.3.1
  `,
  2: ``,
  3: ``,
  4: ``,
  5: ``,
  6: ``,
  7: ``,
  8: ``,
};

// Route that returns JSON data
app.get("/", (req, res) => {
  res.json(data);
});
app.get("/:pno", (req, res) => {
  res.json(data[req.params.pno]);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
