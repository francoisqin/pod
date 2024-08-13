
    // Specify the domain to use the proxy
    if (dnsDomainIs(host, "example.com")) {
        return "PROXY 8.8.8.8:8888";
    }
    // Bypass the proxy for all other domains
    return "DIRECT";
