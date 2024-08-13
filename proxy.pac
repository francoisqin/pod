function FindProxyForURL(url, host) {
    // Specify the domain to use the proxy
    if (dnsDomainIs(host, "example.com")) {
        return "PROXY 0.0.0.0:8888";
    }
    // Bypass the proxy for all other domains
    return "DIRECT";
}
