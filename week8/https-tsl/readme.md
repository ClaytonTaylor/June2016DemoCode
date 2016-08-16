# What is TSL/SSL

> SSL (Secure Socket Layer), it is protocol developed by Netscape way back when (1995) and was primarily used to stop "man-in-the-middle-attacks". (HTTPS) encrypts data/packets as they travel back and forth from client to server. After version, SSL was rebranded as TSL (transport security layer) v1.0 for political reasons. Today, most websites are using TSL 1.2. Version 1.3 is currently in progress.

> Look up all the things here...

- TSL is a protocol that is used to secure other networking layered protocols (like http, ftp).
- The lowest level `protocol` is at the physical layer.
- Several layers up, the `IP` protocol describes network addressing. (127.0.0.1);
- The TCP protocol describes how data can transmitted reliably, in order, with no errors. (packets going in arrive in the same order they went and it is a protocol that guarantees packet completeness)
- The HTTP protocol describes how meaningful requests and responses can be digested as application data.
- The TSL protocol works on top of TCP to secure and other protocol that is running on TCP (e.g. HTTP, SMTP, FTP)

TSL works, in part, using Public Key Cryptography (SALTY BITS).

- distribute a public key: this let's people write messages
- keep a private key on your sever: this let's people read messages

## Acquiring an SSL/TSL Certificate
1. Sign up on a CA (certificate authority, think DMV)
2. Prove to the CA that you own that domain (TXT record, DNS, they have multiple ways to prove you own a domain)
3. CA gives you a cert (e.g. some file, myCertificate.crt, myCertificate.key, myCertificate.pem)
4. The CA cryptographically signs the certificate, so that any client (e.g. browsers, or maybe phone apps) can determine that the cert was issued by the CA, and that it was not tampered with.

## Serving HTTPS traffic on your site:
1. Client connects on port `443` (instead of 80)
2. Client and Server perform SSL/TSL handshake, negotiate which type/version of encryption to use
