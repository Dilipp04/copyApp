const express = require("express");
const app = express();
const PORT = 3000;
app.use(express.json());

let data = {
  0: `
  1: Configure Cisco Routers for OSPF & MD5, NTP, Syslog, and SSH
  2: Configure AAA Authentication on Cisco Routers
  3: Configuring Extended Access Control Lists (ACLs)
  4: Configure IP ACLs to Mitigate Attacks.
  5: Configuring IPv6 ACLs
  6 Configuring a Zone-Based Policy Firewall (ZPF)
  7:  Configure Intrusion Prevention System (IPS), using the CLI
  8: Packet Tracer - Layer 2 Security
`,
  1: `
Practical1: Configure Cisco Routers for OSPF & MD5, NTP, Syslog, and SSH

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

1/B  NTP (network time Protocole)
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
  2: `
Practical 2: Configure AAA Authentication on Cisco Routers

Configure and do rip:

Part-1: Authentication 

R1(config)#username admin1 secret admin1pa55
R1(config)#aaa new-model
R1(config)#aaa authentication login default local
R1(config)#line console 0
R1(config-line)#login authentication default
R1(config-line)#exit

Part 2: Authorization 

R1(config)#ip domain-name ccnasecurity.com
R1(config)#username SSHadmin privilege 15 secret ciscosshpa55
R1(config)#line vty 0 4
R1(config-line)#transport input ssh
R1(config-line)#exit
R1(config)#crypto key zeroize rsa
R1(config)#crypto key generate rsa
How many bits in the modulus [512]: 1024
R1(config)#ip ssh time-out 90
R1(config)#ip ssh authentication-retries 2
R1(config)#ip ssh version 2

Check:
PC> ssh –1 SSHadmin (address)

`,
  3: `
Practical 3: Configuring Extended Access Control Lists (ACLs)

Do the connection as given and rip
(FTP from PC1 to Server  and Web from PC2 to Server)

 FTP from PC1 to Server  
R1(config)#access-list 100 permit tcp 172.22.34.64 0.0.0.31 host 172.22.34.62 eq ftp
R1(config)#access-list 100 permit icmp 172.22.34.64 0.0.0.31 host 172.22.34.62 
R1(config)#interface gigabitEthernet 0/1                   -> pc1 which have to give ftp
R1(config-if)# ip access-group 100 in
Check: PC> ftp 172.22.34.62                   ->server address

Web from PC2 to Server:
R1(config)#ip access-list extended HTTP_ONLY
R1(config-ext-nacl)#permit tcp 172.22.34.96 0.0.0.15 host 172.22.34.62 eq www
R1(config-ext-nacl)#permit icmp 172.22.34.96 0.0.0.15 host 172.22.34.62 
R1(config-ext-nacl)#en
R1(config)# interface gigabitEthernet 0/2
R1(config-if)# ip access-group HTTP_ONLY in
Check:   pc2dekstopbrowersaddress of server and enter

`,
  4: ``,
  5: `
Practical 5: Configuring IPv6 ACLs

Ipv6 configuration
Router 0:
(For router to router)
Router(config)#ipv6 unicast-routing
Router(config)#int s0/1/0
Router(config-if)#ipv6 address 2001:DB8:1:A001::1/64
Router(config-if)#ipv6 address FE80::1 link-local
Router(config-if)#no shut

Router 1:
(for R to R)
Router#config t
Router(config)#ipv6 unicast-routing
Router(config)#int s0/1/0
Router(config-if)#ipv6 address 2001:DB8:1:A001::2/64
Router(config-if)#ipv6 address FE80::1 link-local
Router(config-if)#no shut
Router(config-if)#exit

For G0/1:
Router(config)#ipv6 unicast-routing
Router(config)#int G0/1
Router(config-if)#ipv6 address 2001:DB8:1:2::1/64
Router(config-if)#ipv6 address FE80::1 link-local
Router(config-if)#no shut
Router(config-if)#exit

For G0/0:
Router(config)#ipv6 unicast-routing
Router(config)#int G0/0
Router(config-if)#ipv6 address 2001:DB8:1:1::1/64
Router(config-if)#ipv6 address FE80::1 link-local
Router(config-if)#no shut

Part 1: Block HTTP & HTTPS request on Server and allow ICMP

Router(config)#ipv6 access-list BLOCK-HTTP
Router(config-ipv6-acl)#deny tcp any host 2001:DB8:1:2::3 eq www
Router(config-ipv6-acl)#deny tcp any host 2001:DB8:1:2::3 eq 443
Router(config-ipv6-acl)#exit
Router(config-if)#int G0/1
Router(config-if)#ipv6 access-list BLOCK-HTTP
Router(config-ipv6-acl)#permit ipv6 any any
Router(config-ipv6-acl)#exit
Router(config)#int G0/1
Router(config-if)#ipv6 traffic-filter BLOCK-HTTP in
Router(config-if)#exit

To check :
pc0 web  sever address

Part2: Block ICMP request on Server

Router(config)#ipv6 access-list BLOCK-ICMP
Router(config-ipv6-acl)#deny icmp any any
Router(config-ipv6-acl)#permit ipv6 any any
Router(config-ipv6-acl)#end
Router#config t
Router(config)#int G0/1
Router(config-if)#ipv6 traffic-filter BLOCK-ICMP out
Router(config-if)#exit

To check:
Pc0: ping server address

`,
  6: `
Practical-6 Configuring a Zone-Based Policy Firewall (ZPF)

1st configure and apply rip and see conections:
Go to Router 3:
(SSH connection first)
R3(config)#ip domain-name ccnasecurity.com
R3(config)#username SSHadmin privilege 15 secret ciscosshpa55
R3(config)#line vty 0 4
R3(config-line)# login local
R3(config-line)# transport input ssh
R3(config)#crypto key zeroize rsa
R3(config)#crypto key generate rsa
How many bits in the modulus [512]: 1024
R3(config)#ip ssh time-out 90
R3(config)#ip ssh authentication-retries 2
R3(config)#ip ssh version 2
R3(config)#license boot module c1900 technology-package securityk9
[yes/no] : yes
R3#copy running-config startup-config
R3#reload
R3#show version

R3(config)#zone security IN-ZONE
R3(config-sec-zone)#exit
R3(config)#zone security OUT-ZONE
R3(config-sec-zone)#exit
R3(config)#access-list 101
% Incomplete command.
R3(config)#access-list 101 permit ip 192.168.3.0 0.0.0.255 any
R3(config)#class-map type inspect match-all IN-NET-CLASS-MAP
R3(config-cmap)#match access-group 101
R3(config-cmap)#exit
R3(config)#policy-map type inspect IN-2-OUT-PMAP
R3(config-pmap)#class type inspect IN-NET-CLASS-MAP
R3(config-pmap-c)#inspect
%No specific protocol configured in class IN-NET-CLASS-MAP for inspection. All protocols will be inspected
R3(config-pmap-c)#exit
R3(config-pmap)#exit
R3(config)#zone-pair security IN-2-OUT-ZPAIR source IN-ZONE destination OUT-ZONE
R3(config-sec-zone-pair)#service-policy type inspect IN-2-OUT-PMAP
R3(config-sec-zone-pair)#exit
R3(config)#int G0/1
R3(config-if)#zone-member security IN-ZONE
R3(config-if)#exit
R3(config)#int s0/0/1
R3(config-if)#zone-member security OUT-ZONE
R3(config-if)#exit

Check:
Ping from Server to PC, will not work.
ping 192.168.3.3

Ping from PC to Server , will work.
ping 192.168.1.3

`,
  7: `
Practical 7: : Configure Intrusion Prevention System (IPS), using the CLI

1st configure and do rip;

Router(config)#license boot module c1900 technology-package securityk9
Router#copy running-config startup-config
Router#reload

Part1 : Part 1: Enable IOS IPS
Router>en
Router#mkdir iosips
Create directory filename [iosips]?
Created dir flash:iosips

Router#conf t
Router(config)#ip ips config location flash:iosips
Router(config)#ip ips name iosips
Router(config)#ip ips signature-category
Router(config-ips-category)#category all
Router(config-ips-category-action)#retired true
Router(config-ips-category-action)#exit
Router(config-ips-category)#category i
Router(config-ips-category)#category ios_ips basic
Router(config-ips-category-action)#retired false
Router(config-ips-category-action)#exit
Router(config-ips-category)#exit

Router(config)#int G0/0
Router(config-if)#ip ips iosips out

Part 2: Modify the Signature

Router#config t
Router(config)#ip ips notify log
Router(config)#ex
Router#clock set 07:10:48 22 mar 2025          -> (set clock from server->ntp on it and copy time and date)
Router#conf t
Router(config)#service timestamp log datetime msec
Router(config)#logging host 192.168.1.3
Router(config)#ip ips signature-definition 
Router(config-sigdef)#signature 2004 0
Router(config-sigdef-sig)#status
Router(config-sigdef-sig-status)#retired false
Router(config-sigdef-sig-status)#enable true
Router(config-sigdef-sig-status)#exit
Router(config-sigdef-sig)#engine
Router(config-sigdef-sig-engine)#event-action produce-alert
Router(config-sigdef-sig-engine)#event-action deny-packet-inline 
Router(config-sigdef-sig-engine)#exit
Router(config-sigdef-sig)#exit
Router(config-sigdef)#exit

Check:
PC-1 will ping PC-2 , but PC-2 will not be able to ping PC-1
i.e  ping (address of pc where to send)

`,
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
