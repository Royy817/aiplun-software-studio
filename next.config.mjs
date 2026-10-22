const nextConfig = {
  poweredByHeader: false,
  async headers() {
    return [{ source: '/:path*', headers: [
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      { key: 'X-Frame-Options', value: 'DENY' },
      { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
      { key: 'Content-Security-Policy', value: "object-src 'none'; base-uri 'self'; frame-ancestors 'none'; form-action 'self'; upgrade-insecure-requests" }
    ] }];
  },
  async redirects() {
    return [
      { source: '/:path*', has: [{ type: 'host', value: 'www.aiplun-studio.jp' }], destination: 'https://aiplun-studio.jp/:path*', permanent: true },
      { source: '/:path*', has: [{ type: 'host', value: 'aiplun-software-studio.vercel.app' }], destination: 'https://aiplun-studio.jp/:path*', permanent: true },
      { source: '/index.html', destination: '/', permanent: true },
      { source: '/latest.html', destination: '/', permanent: true },
      { source: '/plans.html', destination: '/plans', permanent: true },
      { source: '/privacy.html', destination: '/privacy', permanent: true },
      { source: '/legal.html', destination: '/legal', permanent: true },
      { source: '/terms.html', destination: '/terms', permanent: true }
    ];
  }
};

export default nextConfig;
