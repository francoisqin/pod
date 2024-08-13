function FindProxyForURL(url, host) {
    // Specify the domain to use the proxy
    if (dnsDomainIs(host, "example.com")) {
        return "PROXY 127.0.0.1:8888";
    }
    // Bypass the proxy for all other domains
    return "DIRECT";
}
